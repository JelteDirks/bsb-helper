// de template voor hoe de zoekwaarden straks door gegeven moet worden aan de filter functie
interface ZoekWaarden {
  hoofdbranche: string;
  branche: string;
  maatschappij: string;
}

// de template voor hoe een json object/regel er straks uit gaat zien
interface Regel {
  niveau: string;
  hoofdbranche: string | number;
  branche?: string | number;
  maatschappij?: string;
  label: string | number;
  omschrijving: string;
  resultaatveld: string;
  controleren: string;
}

/**
 *
 * @param jsonInput
 * @param zoekWaarden
 * @param labelZoeker
 * @param dekkingLabelZoeker
 */
function filterObjects(jsonInput: Regel[],
                       zoekWaarden: ZoekWaarden,
                       labelZoeker: (label: string) => string,
                       dekkingLabelZoeker: (label: string) => string): Regel[] {
  const omschrijvingen = new Set(); // set om bij te houden welke omschrijvingen al gebruikt zijn

  for (let i = 0; i < jsonInput.length; ++i) {
    if (!isValidObject(jsonInput[i], zoekWaarden)) {
      continue; // als het object niet voldoet aan de criteria, zoek in het volgende object
    }

    let {niveau, omschrijving} = jsonInput[i];

    // TODO: kijk welke label zoeker er gebruikt moet worden, en zoek dan of de waarde gevuld is
    if (niveau.toLowerCase() === "dekking") {
      // TODO: gebruik dekking label zoeker?
    } else if (niveau.toLowerCase() === "polis") {
      // TODO: gebruik reguliere label zoeker?
    } else {
      throw new Error("niveau is niet dekking of polis, dit wordt niet ondersteund");
    }

    // TODO: optioneel: kijk if er dubbele omschrijvingen tussen zitten
    if (omschrijvingen.has(omschrijving)) {
      // dubbele omschrijving, hoeft niet toegevoegd te worden

    } else {
      /**
       * TODO: correcte maatschappij, branche en hoofdbranche, en het label is gevuld.
       * Voeg dit object toe aan de correct objecten en controleer de volgende
       */
    }


  }
  return [];
}

function isValidObject(o: Regel, z: ZoekWaarden): boolean {
  if (o.hoofdbranche !== z.hoofdbranche) return false; // controleer of de hoofdbranche matcht
  if (o.branche) { // controleer branche als deze gevuld is
    if (o.branche !== z.branche) return false; // branche moet overeen komen
  }
  if (o.maatschappij) { // controleer maatschappij als deze gevuld is
    if (o.maatschappij !== z.maatschappij) return false;
  }
  return false;
}
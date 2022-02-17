// de template voor hoe de zoekwaarden straks door gegeven moet worden aan de filter functie
interface ZoekWaarden {
  hoofdbranche: string;
  branche: string;
  maatschappij: string;
}

// de template voor hoe een json object/regel er straks uit gaat zien
interface Regel {
  Niveau: string;
  Hoofdbranche: string | number;
  Branche?: string | number;
  Maatschappij?: string;
  labelcode: string | number;
  LabelOmschrijving: string;
  ResultaatVeld: string;
  Weergave: string;
  Dekkingscode: string | number;
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

    let {Niveau, LabelOmschrijving} = jsonInput[i];

    // TODO: kijk welke label zoeker er gebruikt moet worden, en zoek dan of de waarde gevuld is
    if (Niveau.toLowerCase() === "dekking") {
      // TODO: gebruik dekking label zoeker?
    } else if (Niveau.toLowerCase() === "polis") {
      // TODO: gebruik reguliere label zoeker?
    } else {
      throw new Error("niveau is niet dekking of polis, dit wordt niet ondersteund");
    }

    // TODO: optioneel: kijk if er dubbele omschrijvingen tussen zitten
    if (omschrijvingen.has(LabelOmschrijving)) {
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
  if (o.Hoofdbranche !== z.hoofdbranche) return false; // controleer of de hoofdbranche matcht
  if (o.Branche) { // controleer branche als deze gevuld is
    if (o.Branche !== z.branche) return false; // branche moet overeen komen
  }
  if (o.Maatschappij) { // controleer maatschappij als deze gevuld is
    if (o.Maatschappij !== z.maatschappij) return false;
  }
  return false;
}
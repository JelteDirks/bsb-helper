// De template voor hoe de zoekwaarden straks door gegeven moet worden aan de filter functie.
interface ZoekWaarden {
  hoofdbranche: string;
  branche: string;
  maatschappij: string;
}

// De template voor hoe een json object/regel er straks uit gaat zien.
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

// De definitie van en zoekfunctie voor labels op te zoeken in het record.
type zoekFunctie = (label: string, codering?: string) => string;

const regels = loadjson('Snippets/pad/naar/bestand.json'); // object waar alle regels in staan

for (let fct = 0; fct < record.tables.factuur.length; ++fct) { // Ga alle factuurregels na.
  // De zoekcriteria waaraan een regel moet voldoen.
  const criteria: ZoekWaarden = {
    hoofdbranche: <string>record.tables.factuur[fct].fields.hoofdbranche, // de hoofdbranche in deze tabel
    branche: <string>record.tables.factuur[fct].fields.branche, // de branche in deze tabel
    maatschappij: <string>record.tables.factuur[fct].fields.maatschappij // de maatschappij in deze tabel
  };

  // Filter alle objecten a.d.h.v. de criteria, en of het label gevuld is of niet.
  const queue = filterObjects(
    regels.polis, // de polis regels van deze factuur
    criteria,
    zoekLabel.bind(record.tables.factuur[fct].tables.labels)); // bind de huidige label tabel aan de zoekfunctie

  // alle objecten moeten hier gefilterd zijn, log de objecten naar de console
  logger.info(JSON.stringify(queue, null, 2));
  // TODO: doe iets met de overgebleven objecten.
}


/**
 *
 * @param jsonInput de json array waar alle regels in staan
 * @param zoekWaarden de waarden waaraan de regels moeten voldoen
 * @param labelZoeker een functie die de labels kan zoeken in het record
 */
function filterObjects(jsonInput: Regel[],
                       zoekWaarden: ZoekWaarden,
                       labelZoeker: zoekFunctie): Regel[] {
  const omschrijvingen = new Set(); // set om bij te houden welke omschrijvingen al gebruikt zijn
  const queue = [];

  for (let i = 0; i < jsonInput.length; ++i) {
    if (!isValidObject(jsonInput[i], zoekWaarden)) {
      continue; // als het object niet voldoet aan de criteria, zoek in het volgende object
    }

    let {Niveau, LabelOmschrijving, labelcode} = jsonInput[i];

    if (typeof labelcode !== 'string') {
      labelcode = labelcode.toString();
    }

    const labelWaarde = labelZoeker(labelcode)

    if (labelWaarde === '') {
      // de waarde voor deze regel is niet gevuld, label hoeft niet geprint te worden
      continue;
    }

    if (!omschrijvingen.has(LabelOmschrijving)) { // Controleer op dubbele omschrijvingen.
      queue.push(jsonInput[i]); // zet de regel in de wachtrij
      omschrijvingen.add(LabelOmschrijving); // voeg de omschrijving toe aan de set
    }
  }
  return queue;
}

function isValidObject(o: Regel, z: ZoekWaarden): boolean {
  if (o.Hoofdbranche !== z.hoofdbranche) return false; // controleer of de hoofdbranche matcht
  if (o.Branche) { // controleer of branche gevuld is
    if (o.Branche !== z.branche) return false; // branche moet overeen komen
  }
  if (o.Maatschappij) { // controleer of maatschappij gevuld is
    if (o.Maatschappij !== z.maatschappij) return false; // maatschappij moet overeen komen
  }
  return false;
}

/**
 * Zoek een label waarde op in een tabel. De tabel moet voldoen aan de vereiste eigenschappen:
 * - de tabel moet een 'code' veld hebben met daarin het labelnummer
 * - de tabel moet een 'codering' veld hebben met daarin de codering van het huidige label
 * - de tabel moet een 'waarde' veld hebben met daarin de waarde van het huidige label
 * - de tabel moet een 'Code' en 'Omsch' veld hebben als het label een coderingslabel is
 *
 * @example
 * zoekLabel('10033'); // dit zoekt label 10033 op in de tabel, en geeft het kenteken terug
 * zoekLabel('10033', 'Waarde'); // dit zoekt specifiek naar de echte waarde van label 10033
 * zoekLabel('10142') // geen codering gespecificeerd, als de echte waarde leeg is returned de functie de omschrijving
 * zoekLabel('10142', 'Waarde') // codering gespecificeerd, wordt alleen gezocht naar de echte waarde (bestaat dus niet voor 10142, resultaat is leeg!!!)
 * zoekLabel(10142) // ERROR: waarde is geen string, maar een getal
 *
 * LET OP: default zoekopdracht is Waarde, als die niet gevonden is wordt de Omsch gezocht!
 * @param label labelnummer om te zoeken, zonder 'L'
 * @param codering codering om te zoeken, Waarde / Omsch / undefined
 */
function zoekLabel(label: string, codering?: string): string | "" {

  if (codering === undefined) {
    return zoekLabel(label, 'Waarde') || zoekLabel(label, 'Omsch');
  }

  for (let l = 0; l < this.length; ++l) {
    if ((this[l].fields.code === 'L' + label) && (this[l].fields.codering === codering)) {
      return this[l].fields[codering]
    }
  }
  return "";
}

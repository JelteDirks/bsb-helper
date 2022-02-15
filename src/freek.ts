interface ZoekOpties {
  column: number | string;
  value: string | RegExp;
}

/**
 * Behoudt rijen uit een tabel op basis van de opgegeven waardes.
 * @param zoekOpties opties om te zoeken in een tabel
 * @param table tabel om in te zoeken
 */
function filterRows(zoekOpties: ZoekOpties[], table: QUERYResults): QUERYResults[] {
  let result: QUERYResults[] = []; // array om de goedgekeurde rijen in op te slaan
  query('tr', table).each(function (index: number) {
    let row: QUERYResults = this; // lokale variabele voor de huidige rij

    // controleer alle zoek opties
    for (let i = 0 ; i < zoekOpties.length; ++i) {
      let zoekOptie: ZoekOpties = zoekOpties[i]; // de huidige zoek optie om te controleren

      query(`td`) // TODO: filteren op basis van data structuur gekozen
    }

  });

  return result;
}
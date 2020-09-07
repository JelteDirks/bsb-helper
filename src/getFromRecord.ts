/**
 *
 * @param {string} path
 * @param {OLRecord} record
 */
export function getFromRecord(path: string, record: OLRecord): string | number | null {

    const tableRE = /(\w+)\[(\w+)=(.+)]$/;
    const tableIndexRE = /(\w+)\[(\d+)]$/;
    const fieldRE = /\w+/;
    const chunks = path.split('.');
    let current = record;

    for (let chunk of chunks) {
        if (current === null) {
            return null;
        } else if (tableRE.test(chunk)) {
            const [, table, fieldname, value] = chunk.match(tableRE);
            current = getFromTable(current.tables[table], fieldname, value);
        } else if (tableIndexRE.test(chunk)) {
            const [, table, index] = chunk.match(tableIndexRE);
            current = current.tables[table][index];
        } else if (fieldRE.test(chunk)) {
            return !!current.fields[chunk] ? current.fields[chunk] : null;
        }
    }

    return null;
}

export function getFromTable(table: OLRecord, fieldname: string, value: string | number): OLRecord | null {
    for (let i = 0; i < table.length; i++) {
        if (table[i]["fields"][fieldname] === value) {
            return table[i];
        }
    }
    return null;
}
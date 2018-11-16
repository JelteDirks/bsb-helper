export function fieldFinder(table: OLRecord, fieldName: string): string | null {
    let value = null;

    Array.prototype.some.call(table, (tableInstance: OLRecord) => {
        value = tableInstance.fields['value'];
        return tableInstance.fields['name'] === fieldName;
    });

    return value;
}
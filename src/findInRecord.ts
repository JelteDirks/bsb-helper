export function findInRecord(rec: OLRecord, field: string): string | number {
    const tableField = rec.fields[field];
    return typeof tableField === "string" ? tableField : "";
}

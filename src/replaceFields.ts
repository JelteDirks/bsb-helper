export function replaceFields(fields: string[], table: OLRecord) {
    Array.prototype.forEach.call(table, (t: OLRecord) => {

        if (fields.indexOf(<string>t.fields.original_name) === -1) return;

        fields.some((f:string) => {
            if (t.fields.original_name === f) {
                query('body').find(`@${f}@`).text(<string>t.fields.value);
            }

            return t.fields.original_name === f;
        });
    });
}
export function strToHex(value: string): string {
    return Array.prototype.map.call(value, (c: string) => {
        return c.charCodeAt(0).toString(16);
    }).join('');
}

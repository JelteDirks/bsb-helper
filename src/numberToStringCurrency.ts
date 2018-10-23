export function numberToStringCurrency(value: number, decimalSeparator: string) {
    let thousandSeparator = decimalSeparator === ',' ? '.' : ',';
    let characters = Array.prototype.map.call(value.toFixed(2).replace('.', decimalSeparator), e => e);
    return characters.reverse().map((c, i) => {
        i++;
        if ((i % 3) === 0 && i !== 3) return thousandSeparator + c;
        return c;
    }).reverse().join('');
}
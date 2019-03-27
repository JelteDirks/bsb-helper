export function numberToStringCurrency(value: number, decimalSeparator: string) {
    const negative = value < 0;
    value = negative ? value * -1 : value;
    let thousandSeparator = decimalSeparator === ',' ? '.' : ',';
    let characters = Array.prototype.map.call(value.toFixed(2).replace('.', decimalSeparator), e => e);
    return (negative ? "-" : "") + characters.reverse().map((c, i) => {
        i++;
        if ((i % 3) === 0 && i !== 3 && i !== characters.length) return thousandSeparator + c;
        return c;
    }).reverse().join('');
}

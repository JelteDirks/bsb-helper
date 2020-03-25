export function formatCurrency(value: string, valutaSign?: string): string {

    if (value === '' || value === '-') {
        return '0,00';
    }
    if (!/(€\s)?-?([0-9]|[.,])+-?$/m.test(value)) {
        return '0,00';
    }

    value = value.replace('€', '').trim();

    let positive: boolean = true;

    if (value.startsWith('-')) {
        positive = false;
        value = value.substring(1);
    } else if (value.endsWith('-') && !value.endsWith(',-')) {
        positive = false;
        value = value.slice(0, value.length - 1);
    }

    let floatPart: string = '0';
    if (/(.|,)-$/.test(value)) {
        value = value.replace(/(.|,)-$/, '');
    } else if (/[.,][0-9]{1,2}$/.test(value)) {
        floatPart = value.match(/[,.]([0-9]{1,2})$/)[1];
        value = value.replace(/[,.][0-9]{1,2}$/, '');
    }

    value = value.replace(/[.,]/g, '');

    const intPart: number = Number(value) || 0;

    return `${!!valutaSign ? valutaSign + ' ' : ''}${positive ? '' : '-'}${combineParts(intPart, floatPart)}`;
}

function combineParts(intPart: number, floatPart: string): string {
    const iStr: string = String(intPart);
    let fStr: string = floatPart;

    if (fStr.length === 1) {
        fStr = fStr + '0';
    }

    let result: string = "";
    let counter: number = 0;

    for (let i = iStr.length - 1; i >= 0; i--) {
        counter++;
        result = iStr[i] + result;
        if (((counter % 3) === 0) && (counter !== iStr.length)) {
            result = "." + result;
        }
    }

    return `${result},${fStr}`;
}
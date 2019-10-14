export function hexToStr(value: string): string {
    let result = '';

    for (let i = 0; i < value.length; i += 2) {
        result += String.fromCharCode(parseInt(value.substr(i, 2), 16));
    }

    return result;
}

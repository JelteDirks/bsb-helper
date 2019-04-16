export function questionTypeCheck(name: string): string {

    if (/^euro__/.test(name)) return 'euro';
    if (/^x__/.test(name)) return 'percentage';
    if (/^jaar__/.test(name)) return 'jaar';
    if (/^km__/.test(name)) return 'km';
    return 'default';
}
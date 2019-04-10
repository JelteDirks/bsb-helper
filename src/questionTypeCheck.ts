export function questionTypeCheck(name: string): string {

    if (/^euro__/.test(name)) {
        return "euro";
    } else if (/^x__/.test(name)) {
        return "percentage";
    } else {
        return "default";
    }
}
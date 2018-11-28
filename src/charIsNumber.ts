export function charIsNumber(v: string):boolean {
    return v.charCodeAt(0) >= 48 && v.charCodeAt(0) <= 57;
}
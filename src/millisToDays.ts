export function millisToDays(milliseconds: number): number {
    return Number(((((milliseconds / 1000) / 60) / 60) / 24).toFixed(2));
}
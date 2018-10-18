export function millisToDays(milliseconds: number): number {
    let seconds = (milliseconds / 1000);
    let minutes = (seconds / 60);
    let hours = (minutes / 60);
    let days = (hours / 24);
    return Math.abs(days);
}
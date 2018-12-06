export function isBetween(i: number, floor: number, ceil: number, inclusive: boolean = false) {
    return inclusive ? i <= ceil && i >= floor : i < ceil && i > floor;
}
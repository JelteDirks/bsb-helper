import {isType} from "./isType";

export function filterOutChar(s: string, char: number | number[]) {
    let charCodes: number[] = isType.isArray(char) ? <number[]>char : [<number>char];
    return Array.prototype.filter.call(s, (c) => {
        return charCodes.indexOf(c.charCodeAt(0)) < 0;
    }).join('');
}
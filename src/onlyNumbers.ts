import {charIsNumber} from "./charIsNumber";

export function onlyNumbers(v: string): boolean {
    return Array.prototype.every.call(v, (e: string) => {
        return charIsNumber(e);
    });
}
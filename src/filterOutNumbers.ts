import {filterOutChar} from "./filterOutChar";

export function filterOutNumbers(s: string) {
    return filterOutChar(s, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
}
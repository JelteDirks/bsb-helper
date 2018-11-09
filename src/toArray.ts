import {isType} from "./isType";

export function toArray(value: any): any[] {
    return isType.isArray(value) ? value : [value];
}
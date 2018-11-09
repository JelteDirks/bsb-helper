import {isType} from "./isType";

export function nonEmptyString(value: any) {
    return isType.isString(value) && value !== '';
}
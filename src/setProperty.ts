import {isType} from "./isType";

export function setProperty(target: object, name: string, value: any): boolean {
    if (isType.isUndefined(target) ||
        isType.isNull(target) ||
        name === '' ||
        isType.isUndefined(value)) return false;
    target[name] = value;
    return true;
}

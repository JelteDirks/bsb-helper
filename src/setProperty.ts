import {isType} from "./isType";

export function setProperty(_this: object, name: string, value: any): boolean {
    if (isType.isUndefined(_this) ||
        isType.isNull(_this) ||
        name === '' ||
        isType.isUndefined(value)) return false;
    _this[name] = value;
    return true;
}
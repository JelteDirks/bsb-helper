import {setProperty} from "./setProperty";
import {isType} from "./isType";

export function copyProperties(original: object, copy: object): any {

    if (isType.isUndefined(copy)) throw Error("Cannot copy properties to a non-existing object. Make sure you check object before copying.");
    if (isType.isUndefined(original)) return copy;

    const keys = Object.keys(original);

    keys.forEach(function (key) {
        if (!original.hasOwnProperty(key)) return;
        setProperty(copy, key, original[key]);
    });

    return copy;
}
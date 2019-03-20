import {setProperty} from "./setProperty";
import {isType} from "./isType";

export function copyProperties(target: object, source: object): any {

    if (isType.isUndefined(target)) throw "Cannot copy properties to a non-existing object. Make sure you check object before copying.";
    if (isType.isUndefined(source)) return target;

    const keys = Object.keys(source);

    keys.forEach(function (key) {
        if (!source.hasOwnProperty(key)) return;
        setProperty(target, key, source[key]);
    });

    return target;
}

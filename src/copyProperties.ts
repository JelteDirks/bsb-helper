import {setProperty} from "./setProperty";
import {isType} from "./isType";

export function copyProperties(target: object, source: object): any {

    if (isType.isUndefined(source)) throw Error("Cannot copy properties to a non-existing object. Make sure you check object before copying.");
    if (isType.isUndefined(target)) return source;

    const keys = Object.keys(target);

    keys.forEach(function (key) {
        if (!target.hasOwnProperty(key)) return;
        setProperty(source, key, target[key]);
    });

    return source;
}

import {nonEmptyProperty} from "./nonEmptyProperty";
import {isType} from "./isType";

export function filterEmptyProperties(list: Object[], propName: string | string[]): { [key: string]: any }[] {

    let propertiesNames: string[] = isType.isArray(propName) ? <string[]>propName : [<string>propName];

    return list.filter(function (obj): boolean {
        return propertiesNames.every((pName) => {
            return nonEmptyProperty(obj, pName);
        });
    });
}
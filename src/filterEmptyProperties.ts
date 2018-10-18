import {nonEmptyProperty} from "./nonEmptyProperty";

export function filterEmptyProperties(list: Object[], propName: string): any[] {
    return list.filter(function (obj): boolean {
        return nonEmptyProperty(obj, propName);
    });
}
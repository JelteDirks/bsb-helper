import {nonEmptyProperty} from "./nonEmptyProperty";

function filterEmptyProperties(list: Object[], propName: string): any[] {
    return list.filter(function (obj): boolean {
        return nonEmptyProperty(obj, propName);
    });
}

export {filterEmptyProperties};
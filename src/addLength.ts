/**
 * Adds length property to the object and all nested objects. Object.keys().length determines length.
 * @param {object} object The object to add length to.
 */
export function addLength(object: object): object {

    if (Object.prototype.toString.call(object) !== "[object Object]") return object;
    if (!!object['length']) return object;

    Object.keys(object).forEach((k: string) => {
        object[k] = addLength(object[k]);
    });

    object['length'] = Object.keys(object).length;

    return object;
}

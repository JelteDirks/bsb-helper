/**
 * Converts [string]{@link https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String} to a [date]{@link Date} object.
 * @throws RangeError when the string is empty.
 * @param {string} sVal
 * @param {string|RegExp} format
 * @returns {Date} if date an be converted
 * @returns {null} if date is invalid
 */
import {isValidDate} from "./isValidDate";

export function stringToDate(sVal: string, format: string | RegExp): Date|null {

    if (sVal === '') {
        throw RangeError('empty string can not be converted to date');
    }

    let form: string;

    if (typeof format !== "string") {
        form = format.source;
    } else {
        form = format;
    }

    if (!isValidDate(sVal, form)) return null;

    const dayIndex = new RegExp('DD').exec(form).index;
    const monthIndex = new RegExp('MM').exec(form).index;
    const yearIndex = new RegExp('YYYY').exec(form).index;

    const day = sVal.substr(dayIndex, 2);
    const month = sVal.substr(monthIndex, 2);
    const year = sVal.substr(yearIndex, 4);

    return new Date(Number(year), Number(month) - 1, Number(day));
}

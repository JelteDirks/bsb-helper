import {stringToDate} from "./stringToDate";
import {millisToDays} from "./millisToDays";
import {isType} from "./isType";

/**
 *
 * @throws RangeError when startDate is an empty string
 * @throws RangeError when endDate is an empty string
 * @param {string|Date} startDate
 * @param {string|Date} endDate
 * @param {string|RegExp} format
 */
export function dateDifference(startDate: string | Date, endDate: string | Date, format?: string): number {

    let startDayMillis: number;
    let endDayMillis: number;
    let sDate: Date;
    let eDate: Date;

    if (startDate === '') throw RangeError('start date is an empty string');
    if (endDate === '') throw RangeError('end date is an empty string');

    if ((isType.isString(startDate) || isType.isString(endDate)) && !isType.isString(format)) throw new Error('can not use string dates without specifying format');

    if (startDate instanceof Date) {
        sDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    } else {
        sDate = stringToDate(startDate, format);
    }

    if (endDate instanceof Date) {
        eDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    } else {
        eDate = stringToDate(endDate, format);
    }

    startDayMillis = sDate.getTime();
    endDayMillis = eDate.getTime();

    return Math.abs(millisToDays(endDayMillis) - millisToDays(startDayMillis));
}

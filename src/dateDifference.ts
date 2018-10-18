import {stringToDate} from "./stringToDate";
import {millisToDays} from "./millisToDays";

export function dateDifference(startDate: string | Date, endDate: string | Date, format?: string): number {

    let startDayMillis: number;
    let endDayMillis: number;
    let sDate: Date;
    let eDate: Date;

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
export function stringToDate(sVal: string, format: string): Date {

    const dayIndex = new RegExp('DD').exec(format).index;
    const monthIndex = new RegExp('MM').exec(format).index;
    const yearIndex = new RegExp('YYYY').exec(format).index;

    const day = sVal.substr(dayIndex, 2);
    const month = sVal.substr(monthIndex, 2);
    const year = sVal.substr(yearIndex, 4);

    let d = new Date(Number(year), Number(month) - 1, Number(day));
    return d;
}
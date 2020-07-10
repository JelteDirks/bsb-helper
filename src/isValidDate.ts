export function isValidDate(date: string, format: string):boolean {

    if (date === '') return false;

    const dayIndex = new RegExp('DD').exec(format)?.index;
    const monthIndex = new RegExp('MM').exec(format)?.index;
    const yearIndex = new RegExp('YYYY').exec(format)?.index;

    const day = date.substr(dayIndex, 2);
    const month = date.substr(monthIndex, 2);
    const year = date.substr(yearIndex, 4);

    const dateFormat = new Date(Number(year), Number(month) - 1, Number(day));

    if (dateFormat.getDate() !== Number(day)) return false;
    if ((dateFormat.getMonth() + 1) !== Number(month)) return false;
    if (dateFormat.getFullYear() !== Number(year)) return false;

    return true;
}
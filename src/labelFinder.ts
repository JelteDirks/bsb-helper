import {isType} from "./isType";
import {arrayFind} from "./arrayFind";

export function labelFinder(l: string): string | number | Date | undefined {
    let rec: OLRecord[] = this;
    let attr = 'value';

    if (isType.isUndefined(rec)) {
        throw Error('no record specified to labelFinder: ' + typeof rec);
    }

    if (l.indexOf('c') > -1) {
        attr = 'code';
    } else if (l.indexOf('o') > -1) {
        attr = 'omsch';
    }

    l = l.replace(/[co]/g, '');

    const result: OLRecord = arrayFind(rec, (item: OLRecord) => {
        return item.fields['number'] === `L${l}`;
    });

    return result ? result.fields[attr] : void 0;
}
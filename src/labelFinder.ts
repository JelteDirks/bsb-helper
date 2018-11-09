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

    logger.info(l);
    l.replace(/[co]/g, '');
    logger.info(l);

    const result: OLRecord = arrayFind(rec, (item: OLRecord) => {
        logger.info(item.fields['number'].toString());
        return item.fields['number'] === l;
    });

    return result ? result.fields[attr] : void 0;
}
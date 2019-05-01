import {arrayFind} from "./arrayFind";

export type LabelFinderResults = string | number | Date | undefined;

export function labelFinder(l: string): LabelFinderResults {
    let attr = 'value';

    if (!this.length) throw 'bound record has no length property, check if it is a correct record';

    if (typeof l !== 'string') throw 'label to be found is undefined';

    if (l.indexOf('c') > -1) {
        attr = 'code';
    } else if (l.indexOf('o') > -1) {
        attr = 'omsch';
    }

    l = l.replace(/[co]/g, '');

    const result: OLRecord = arrayFind(this, (item: OLRecord) => {
        return item.fields['number'] === `L${l}`;
    });

    return result ? result.fields[attr] : void 0;
}

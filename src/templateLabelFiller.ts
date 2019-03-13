import {LabelFinderResults} from "./labelFinder";
import {isType} from "./isType";

export function templateLabelFiller(template: string, labelFinder: (v: string) => LabelFinderResults): string {
    if (!isType.isString(template)) throw Error('template is not a string ' + typeof template);
    if (!(labelFinder instanceof Function)) throw Error('pass a correct function as labelfinder');

    return template.replace(/[$]{[0-9]{5}[oc]?}/g, (match) => {
        const val = labelFinder(match.replace(/[${}]/g, ""));
        return !!val ? String(val) : "";
    });
}

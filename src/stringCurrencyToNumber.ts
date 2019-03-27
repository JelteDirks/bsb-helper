import {keepNumbers} from "./keepNumbers";

export function stringCurrencyToNumber(v: string, separator: string): number {

    let negative = v.indexOf("-") === 0;
    let [pre, post] = v.split(separator);
    pre = pre ? keepNumbers(pre) : 0;
    post = post ? keepNumbers(post) : 0;

    let postValue = Number(post) / 100;
    let preValue = Number(pre);

    return negative ? 0 - (preValue + postValue) : preValue + postValue
}

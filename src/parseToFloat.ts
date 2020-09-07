import {keepNumbers} from "./keepNumbers";

export function parseToFloat(value: string) {

    let negative = value.indexOf("-") === 0;
    let [pre, post] = value.split(',');
    pre = pre ? keepNumbers(pre) : 0;
    post = post ? keepNumbers(post) : 0;

    let postValue = Number(post) / 100;
    let preValue = Number(pre);

    return negative ? 0 - (preValue + postValue) : preValue + postValue
}

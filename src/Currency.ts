import {isType} from "./isType";
import {numberToStringCurrency} from "./numberToStringCurrency";
import {stringCurrencyToNumber} from "./stringCurrencyToNumber";
import {isValidCurrency} from "./isValidCurrency";

export class Currency {

    private val: number = 0;

    constructor(private readonly initialVal: number | string, sep: string) {
        if (isType.isString(initialVal)) {
            if (!isValidCurrency(<string>initialVal, sep)) throw "That is not a valid currency format" + initialVal;
            this.val = stringCurrencyToNumber(<string>initialVal, sep);
        } else {
            this.val = <number>initialVal;
        }
    }

    public formatted(sep: string) {
        return numberToStringCurrency(this.val, sep);
    }

    public get value() {
        return this.val;
    }

    public set value(v: number) {
        this.val = v;
    }
}


import {isType} from "./isType";
import {numberToStringCurrency} from "./numberToStringCurrency";

export class Currency {

    readonly initialValue: string | number;
    public positive: boolean;
    private _value: string;

    constructor(private decimalSeparator: string, initialValue?: string | number) {
        this.initialValue = initialValue;

        if (isType.isNumber(initialValue)) {
            this.positive = (initialValue >= 0);
            this._value = numberToStringCurrency(<number>initialValue, decimalSeparator);
        } else {
            this.positive = String.prototype.indexOf.call(initialValue, '-') === -1;
            this._value = <string>initialValue;
        }
    }

    public noTrail(): string {
        const re = new RegExp(`${this.decimalSeparator}[.]*`);
        return this._value.replace(re, '');
    }

    public getInitialValue(): string {
        return String(this.initialValue);
    }

    get value(): string {
        return this._value;
    }

    set value(v: string) {
        this._value = v;
    }
}


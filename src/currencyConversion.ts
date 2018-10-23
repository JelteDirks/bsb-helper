import {isType} from "./isType";
import {numberToStringCurrency} from "./numberToStringCurrency";

export class Currency {

    private initialValue: string | number;
    private thousandSeparator: string;
    private value: string;

    constructor(private decimalSeparator: string, initialValue?: string | number) {
        this.initialValue = initialValue;

        if (isType.isNumber(initialValue)) {
            this.value = numberToStringCurrency(<number>initialValue, decimalSeparator);
        }
    }

    public getInitialValue(): string {
        return String(this.initialValue);
    }
}


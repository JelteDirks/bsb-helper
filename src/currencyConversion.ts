export class Currency {

    constructor(private initialValue: string | number) {
    }

    public getInitialValue(): string {
        return String(this.initialValue);
    }
}
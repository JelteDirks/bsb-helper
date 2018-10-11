export class Pipe {
    private functions: { (data): any }[] = [];

    constructor(private value: any = "") {
    }

    add(fn: { (data): any }): this {
        this.functions.push(fn);

        return this;
    }

    run(): any {
        let value = this.value;

        this.functions.forEach((fn) => {
            value = fn(value);
        });

        this.value = value;
    }

    getValue(): any {
        return this.value;
    }
}
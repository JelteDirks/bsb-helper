export class Pipe {

    private functions: PipeFunctionInformation[] = [];

    constructor(private value: any) {
    }

    public add(fn: { (data: any): any }, thisObject: any = null): this {

        this.functions.push({
            fn: fn,
            thisObject: thisObject
        });

        return this;
    }

    public run(): void {
        let result = this.value;

        this.functions.forEach((p: PipeFunctionInformation) => {
            result = p.fn.call(p.thisObject, result);
        });

        this.value = result;
    }

    public getValue(): any {
        return this.value;
    }
}

interface PipeFunctionInformation {
    fn: { (data: any): any };
    thisObject: any;
}
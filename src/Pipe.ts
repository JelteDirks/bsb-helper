/**
 * Provides an easy interface for piping a value through multiple functions dynamically.
 */
export class Pipe {

    private functions: PipeFunctionInformation[] = [];

    constructor(private value: any) {
    }

    /**
     * Sets the value that is piped through the functions.
     * @param value The value that is piped through the functions.
     */
    public setValue(value: any) {
        this.value = value;
    }

    /**
     * Adds a function to the pipe chain.
     * @param fn The function to be added to the pipe chain.
     * @param thisObject Optional object to be used as the 'this' value.
     */
    public addFunction(fn: { (data: any): any }, thisObject: any = null): this {

        this.functions.push({
            fn: fn,
            thisObject: thisObject
        });

        return this;
    }

    /**
     * Executes each function with the value, where each function receives the return value of the previous function.
     */
    public run(): void {
        let result = this.value;

        this.functions.forEach((p: PipeFunctionInformation) => {
            result = p.fn.call(p.thisObject, result);
        });

        this.value = result;
    }

    /**
     * Get the value.
     */
    public getValue(): any {
        return this.value;
    }
}

interface PipeFunctionInformation {
    fn: { (data: any): any };
    thisObject?: any;
}

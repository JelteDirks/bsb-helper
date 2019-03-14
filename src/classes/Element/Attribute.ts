export class Attribute {

    constructor(private name, public value) {
    }

    public print(): string {
        return ` ${this.name}="${this.value}"`;
    }
}

export interface AttributeData {
    name: string
    value: string
}

import {Attribute, AttributeData} from "./Attribute";

export class Element {

    private attributes: Attribute[] = [];
    private children: Element[] = [];

    constructor(private name: string, attributeData?: AttributeData[], private value: string | number | string[] = '') {
        let _this: Element = this;

        if (!attributeData) return;

        attributeData.forEach(function (data) {
            if (data === null || typeof data === typeof undefined) return;
            _this.attributes.push(new Attribute(data.name, data.value));
        });
    }

    public print(): string {
        let childrenValues = this.children.map(child => child.print()).join('');

        return `<${this.name}${this.attributes.map(a => a.print()).join('')}>${this.value}${childrenValues}</${this.name}>`;
    }

    public addChild(child: Element): void {
        this.children.push(child);
    }

    public addChildren(children: Element[]): void {
        children.forEach(e => this.children.push(e));
    }

    public addAttribute(attribute: Attribute): void {
        this.attributes.push(attribute);
    }
}

export interface ElementData {
    name: string
    attributeData?: AttributeData[]
    value?: string
}
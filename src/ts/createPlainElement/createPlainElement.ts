import {Element, ElementData} from "./Element";

export function createPlainElement(data: ElementData[] | ElementData): string {

    let elements: Element[] = [];

    if (!(data instanceof Array)) {
        data = [data];
    }

    data.forEach(function (d: ElementData) {
        elements.push(new Element(d.name, d.attributeData, d.value));
    });

    return elements.map(e => e.print()).join('');
}

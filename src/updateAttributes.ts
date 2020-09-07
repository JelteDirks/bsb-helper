export function updateAttributes(set: QUERYResults, update: string, attributes: string[], template: string | RegExp) {
    set.each(function (this: QUERYResults) {
        attributes.forEach((attr: string) => {
            const attrVal = this.attr(attr);

            if (!attrVal) return;

            const newVal = attrVal.replace(template, update);

            this.attr(attr, newVal);
        });
    });
}
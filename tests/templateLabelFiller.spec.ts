import {templateLabelFiller} from "../src/templateLabelFiller";

const finder = (v: string) => {
    if (v === "00001") {
        return "Jelte"
    }

    if (v === "12345c") {
        return "Tjomme"
    }

    if (v === "12345o") {
        return "Huub"
    }

    return void 0;
};

test('basic filler', () => {
    const template = "${00001} and ${12345c} and ${12345o}";
    expect(templateLabelFiller(template, finder)).toMatch("Jelte and Tjomme");
});

test('no match', () => {
    const template = "${}";
    expect(templateLabelFiller(template, finder)).toMatch("${}");
});

test('no label found', () => {
    const template = "${1234} with ${12345c}";
    expect(templateLabelFiller(template, finder)).toMatch(" with Tjomme");
});

test('template is null', () => {
    expect(() => {
        templateLabelFiller(null, finder);
    }).toThrowError()
});

test('template is undefined', () => {
    expect(() => {
        templateLabelFiller(undefined, finder);
    }).toThrowError()
});

test('finder is null', () => {
    expect(() => {
        templateLabelFiller("asdf", null);
    }).toThrowError()
});

test('finder is undefined', () => {
    expect(() => {
        templateLabelFiller("asdf", undefined);
    }).toThrowError()
});

import {Currency} from "../src/Currency";

interface TestCase {
    actual: Currency;
    asFloat: number;
    asFormatted: string;
}

const tests: TestCase[] = [
    {
        actual: new Currency(10, ","),
        asFloat: 10,
        asFormatted: "10,00"
    },
    {
        actual: new Currency("10,50", ","),
        asFloat: 10.50,
        asFormatted: "10,50"
    },
    {
        actual: new Currency(-10, ","),
        asFloat: -10,
        asFormatted: "-10,00"
    },
    {
        actual: new Currency("-10,49", ","),
        asFloat: -10.49,
        asFormatted: "-10,49"
    },
    {
        actual: new Currency(10.29, ","),
        asFloat: 10.29,
        asFormatted: "10,29"
    },
    {
        actual: new Currency(-10.99, ","),
        asFloat: -10.99,
        asFormatted: "-10,99"
    }
];

describe("currency test", () => {
    tests.forEach((c: TestCase) => {
        it("should match float", () => {
            expect(c.actual.value).toEqual(c.asFloat);
        });
    });

    tests.forEach((c: TestCase) => {
        it("should match formatted", () => {
            expect(c.actual.formatted(",")).toEqual(c.asFormatted);
        })
    });
});

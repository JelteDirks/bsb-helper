import {stringCurrencyToNumber} from "../src/stringCurrencyToNumber";

test('basic', () => {
    expect(stringCurrencyToNumber('10.000,00', ',')).toBe(10000);
    expect(stringCurrencyToNumber('10,52', ',')).toBe(10.52);
});

test('no trail', () => {
    expect(stringCurrencyToNumber('10.000', ',')).toBe(10000);
});

test('decimal only', () => {
    expect(stringCurrencyToNumber('0,12', ',')).toBe(0.12);
});

test('negative dec', () => {
    expect(stringCurrencyToNumber('-10,30', ',')).toBe(-10.30);
});

test('negative reg', () => {
    expect(stringCurrencyToNumber('-10', ',')).toBe(-10);
});

test('end with ,-', () => {
    expect(stringCurrencyToNumber('100,-', ',')).toBe(100);
});

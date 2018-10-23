import {numberToStringCurrency} from "./numberToStringCurrency";

test('numToCurrency dec comma', () => {
    expect(numberToStringCurrency(100, ',')).toMatch('100,00');
});

test('numToCurrency dec point', () => {
    expect(numberToStringCurrency(100, '.')).toMatch('100.00');
});

test('numToCurrency dec point /w million', () => {
    expect(numberToStringCurrency(10000000, '.')).toBe('10,000,000.00');
});

test('numToCurrency dec comma /w million', () => {
    expect(numberToStringCurrency(10000000, ',')).toBe('10.000.000,00');
});
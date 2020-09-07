import {parseToFloat} from "../src/parseToFloat";

describe('parseToFloat', () => {

    test('regular', () => {
        expect(parseToFloat('1000')).toBe(1000);
        expect(parseToFloat('10')).toBe(10);
        expect(parseToFloat('1')).toBe(1);
    });

    test('negative', () => {
        expect(parseToFloat('-10')).toBe(-10);
        expect(parseToFloat('-100')).toBe(-100);
        expect(parseToFloat('-1')).toBe(-1);
    });

    test('regular decimals', () => {
        expect(parseToFloat('10,00')).toBe(10);
        expect(parseToFloat('100,00')).toBe(100);
    });

    test('thousand separators', () => {
        expect(parseToFloat('1.000')).toBe(1000);
        expect(parseToFloat('1.000.000')).toBe(1000000);
        expect(parseToFloat('1.234.567')).toBe(1234567);
    });

    test('positive combinations', () => {
        expect(parseToFloat('1.234,67')).toBe(1234.67);
        expect(parseToFloat('1.234.567,89')).toBe(1234567.89);
    });

    test('negative combinations', () => {
        expect(parseToFloat('-1.402,44')).toBe(-1402.44);
        expect(parseToFloat('-1.234.567,89')).toBe(-1234567.89);
    });

});

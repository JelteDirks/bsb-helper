import {isValidCurrency} from "../src/isValidCurrency";

test('regular valid', () => {
    expect(isValidCurrency("10.000,00", ",")).toBeTruthy();
    expect(isValidCurrency("10,000.00", ".")).toBeTruthy();
});

test('negative valid', () => {
    expect(isValidCurrency("-10.000,00", ",")).toBeTruthy();
    expect(isValidCurrency("-10,000.00", ".")).toBeTruthy();
});

test('no trail valid', () => {
    expect(isValidCurrency("10.000", ",")).toBeTruthy();
    expect(isValidCurrency("10,000", ".")).toBeTruthy();
});

test('trail invalid', () => {
    expect(isValidCurrency("10.000.00", ",")).toBeFalsy();
    expect(isValidCurrency("10,000,00", ".")).toBeFalsy();
});

test('no trail invalid', () => {
    expect(isValidCurrency("10.000.00,", ",")).toBeFalsy();
    expect(isValidCurrency("10,000,00.", ".")).toBeFalsy();
});

test('bad internal number count', () => {
    expect(isValidCurrency("10.00.00,", ",")).toBeFalsy();
    expect(isValidCurrency("10,00,00.", ".")).toBeFalsy();
});

test('bad preceding character', () => {
    expect(isValidCurrency("w10.00.00,", ",")).toBeFalsy();
    expect(isValidCurrency("w10,00,00.", ".")).toBeFalsy();
});

test('bad trailing character', () => {
    expect(isValidCurrency("10.00.00,00d", ",")).toBeFalsy();
    expect(isValidCurrency("10,00,00.00f", ".")).toBeFalsy();
});

import {Currency} from "../src/currencyConversion";

let x = new Currency(',', '10.000,00');

test('basic', () => {
    expect(x.getInitialValue()).toMatch('10.000,00');
    expect(x.value).toMatch('10.000,00');
});

test('no trail', () => {
    expect(x.noTrail()).toMatch('10.000');
});
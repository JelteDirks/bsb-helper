import {Currency} from "../src/Currency";

let x = new Currency(',', '10.000,00');

test('basic', () => {
    expect(x.getInitialValue()).toMatch('10.000,00');
    expect(x.value).toMatch('10.000,00');
});

test('no trail', () => {
    expect(x.noTrail()).toMatch('10.000');
});

test('positive str', () => {
    expect(x.positive).toBeTruthy();
});

test('negative str', () => {
    let x = new Currency(',', '-10.000');
    expect(x.positive).toBeFalsy();
});

test('positive num', () => {
    let x = new Currency(',', 10);
    expect(x.positive).toBeTruthy();
});

test('negative num', () => {
    let x = new Currency(',', -10);
    expect(x.positive).toBeFalsy();
});
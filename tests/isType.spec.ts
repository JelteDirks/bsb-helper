import {isType} from "../src/isType";

test('string test', () => {
    expect(isType.isString('')).toBeTruthy();
    expect(isType.isString([])).toBeFalsy();
});

test('array test', () => {
    expect(isType.isArray([])).toBeTruthy();
    expect(isType.isArray('')).toBeFalsy();
});

test('number test', () => {
    expect(isType.isNumber(0)).toBeTruthy();
    expect(isType.isNumber([])).toBeFalsy();
});

test('date test', () => {
    expect(isType.isDate(new Date())).toBeTruthy();
    expect(isType.isDate([])).toBeFalsy();
});

test('any string test', () => {
    expect(isType.anyIsString('', 0)).toBeTruthy();
    expect(isType.anyIsString([])).toBeFalsy();
});

test('any array test', () => {
    expect(isType.anyIsArray([], 0)).toBeTruthy();
    expect(isType.anyIsArray('')).toBeFalsy();
});

test('any number test', () => {
    expect(isType.anyIsNumber(0, '')).toBeTruthy();
    expect(isType.anyIsNumber([])).toBeFalsy();
});

test('any date test', () => {
    expect(isType.anyIsDate(new Date(), 0)).toBeTruthy();
    expect(isType.anyIsDate([])).toBeFalsy();
});

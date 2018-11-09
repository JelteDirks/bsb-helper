import {nonEmptyString} from "./nonEmptyString";

test('basic ', () => {
    expect(nonEmptyString('hallo')).toBeTruthy();
});

test('empty', () => {
    expect(nonEmptyString('')).toBeFalsy();
});
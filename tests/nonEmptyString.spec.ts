import {nonEmptyString} from "../src/nonEmptyString";

test('basic ', () => {
    expect(nonEmptyString('hallo')).toBeTruthy();
});

test('empty', () => {
    expect(nonEmptyString('')).toBeFalsy();
});
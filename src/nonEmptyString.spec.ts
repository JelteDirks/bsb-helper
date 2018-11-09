import {nonEmptyString} from "./nonEmptyString";

// @ts-ignore
test('basic ', () => {
    // @ts-ignore
    expect(nonEmptyString('hallo')).toBeTruthy();
});

// @ts-ignore
test('empty', () => {
    // @ts-ignore
    expect(nonEmptyString('')).toBeFalsy();
});
import {isBetween} from "../src/isBetween";

test('inclusive', () => {
    expect(isBetween(1, 1, 20, true)).toBeTruthy();
});

test('exclusive', () => {
    expect(isBetween(1, -1, 2)).toBeTruthy();
});

test('inclusive false', () => {
    expect(isBetween(1, 2, 3, true)).toBeFalsy();
});

test('exlcusive false', () => {
    expect(isBetween(1, 1, 2)).toBeFalsy();
});
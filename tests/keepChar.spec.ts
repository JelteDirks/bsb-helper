import {keepChar} from "../src/keepChar";

test('basic', () => {
    expect(keepChar('abc0123', 48)).toMatch('0');
});

test('array', () => {
    expect(keepChar('abc0123', [48, 49, 50, 51])).toMatch('0123');
});
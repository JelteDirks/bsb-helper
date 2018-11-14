import {pad} from "../src/pad";

test('basic', () => {
    expect(pad('1', '0', 5)).toBe('00001');
});

test('length overflow', () => {
    expect(pad('0--0', '-', 4)).toBe('0--0');
});

test('character length overflow', () => {
    expect(pad('0101', '01', 4)).toBe('0101');
});
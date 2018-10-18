import {pad} from "./pad";

test('basic', () => {
    expect(pad('1', '0', 5)).toBe('00001');
});
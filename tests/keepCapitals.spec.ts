import {keepCapitals} from "../src/keepCapitals";

test('basic', () => {
    expect(keepCapitals('aAbBcCcDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'))
        .toMatch('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

test('no input', () => {
    const x = void 0;
    expect(() => {
        return keepCapitals(x);
    }).toThrowError();
});
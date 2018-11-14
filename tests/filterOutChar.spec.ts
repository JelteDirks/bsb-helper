import {filterOutChar} from "../src/filterOutChar";

test('basic', () => {
    expect(filterOutChar('0123', 48)).toMatch('123')
});

test('multi', () => {
    expect(filterOutChar('0123', [48, 49])).toMatch('23');
});
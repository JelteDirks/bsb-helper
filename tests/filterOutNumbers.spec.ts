import {filterOutNumbers} from "../src/filterOutNumbers";

test('basic', () => {
    expect(filterOutNumbers('0123abc456def789')).toMatch('abcdef');
});
import {filterOutNumbers} from "./filterOutNumbers";

test('basic', () => {
    expect(filterOutNumbers('0123abc456def789')).toMatch('abcdef');
});
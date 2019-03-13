import {keepNumbers} from "../src/keepNumbers";

test('basic', () => {
    expect(keepNumbers('123abc456')).toMatch('123456');
});
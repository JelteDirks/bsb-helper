import {onlyNumbers} from "../src/onlyNumbers";

test('numbers', () => {
    expect(onlyNumbers('12053925')).toBeTruthy();
});

test('other', () => {
    expect(onlyNumbers('asd2535')).toBeFalsy();
});
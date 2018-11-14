import {isLeapYear} from "../src/isLeapYear";

test('basic leap year', () => {
    expect(isLeapYear(2000)).toBeTruthy();
});

test('no leap year', () => {
    expect(isLeapYear(2001)).toBeFalsy();
});
import {isValidDate} from "../src/isValidDate";

describe('is valid date', () => {

    test('Test valid date', () => {
        expect(isValidDate('10-10-2018', 'DD-MM-YYYY')).toBeTruthy();
    });

    test('First day of the month', () => {
        expect(isValidDate('01-03-2020', 'DD-MM-YYYY')).toBeTruthy();
    });

    test('Test invalid day', () => {
        expect(isValidDate('40-1-2020', 'DD-MM-YYYY')).toBeFalsy();
    });

    test('Test invalid format', () => {
        expect(isValidDate('13-02-2020', 'MM-DD-YYYY')).toBeFalsy();
    });

    test('empty date', () => {
        expect(isValidDate('', 'DD-MM-YYYY')).toBeFalsy();
    });

    test('no valid date format', () => {
        expect(isValidDate('date', 'DD-MM-YYYY')).toBeFalsy();
    });
});

import {dateDifference} from "./dateDifference";

test('string comparison metric', () => {
    expect(dateDifference('10-10-2010', '20-10-2010', 'DD-MM-YYYY')).toBe(10);
});

test('string comparison imperial', () => {
    expect(dateDifference('10-10-2010', '10-20-2010', 'MM-DD-YYYY')).toBe(10);
});

test('date comparison', () => {
    expect(dateDifference(new Date(2018, 9, 10), new Date(2018, 9, 20))).toBe(10);
});

test('date & string comparison', () => {
    expect(dateDifference('10-10-2018', new Date(2018, 9, 20), 'DD-MM-YYYY')).toBe(10);
});

test('string without format', () => {
    expect(() => {
        dateDifference('10-10-2018', new Date(2018, 9, 20))
    }).toThrowError('can not use string dates without specifying format');
});

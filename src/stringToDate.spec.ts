import {stringToDate} from "./stringToDate";

test('basic metric', () => {
    expect(stringToDate('10-10-2018', 'DD-MM-YYYY').toString()).toBe(new Date(2018, 9, 10).toString());
});

test('basic imperial', () => {
    expect(stringToDate('10-20-2018', 'MM-DD-YYYY').toString()).toBe(new Date(2018, 9, 20).toString());
});


import {charIsNumber} from "../src/charIsNumber";

test('number', () => {
    expect(charIsNumber('3')).toBeTruthy();
});

test('no number', () => {
    expect(charIsNumber('d')).toBeFalsy();
});
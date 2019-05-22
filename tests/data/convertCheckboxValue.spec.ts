import {convertCheckboxValue} from "../../src/convertCheckboxValue";

describe('convert checkbox values', () => {

    test('should replace on', () => {
        expect(convertCheckboxValue('on')).toMatch('Ja');
    });

    test('should not replace nested on', () => {
        expect(convertCheckboxValue('aonb')).toMatch('aonb');
    });

    test('should not replace trailing on', () => {
        expect(convertCheckboxValue('abon')).toMatch('abon');
    });

    test('should not replace leading on', () => {
        expect(convertCheckboxValue('onab')).toMatch('onab');
    });

    test('should replace 0', () => {
        expect(convertCheckboxValue('0')).toMatch('Nee');
    });

    test('should not replace trailing 0', () => {
        expect(convertCheckboxValue('ab0')).toMatch('ab0');
    });

    test('should not replace leading 0', () => {
        expect(convertCheckboxValue('0ab')).toMatch('0ab');
    });

    test('should not replace nested 0', () => {
        expect(convertCheckboxValue('a0b')).toMatch('a0b');
    });
});

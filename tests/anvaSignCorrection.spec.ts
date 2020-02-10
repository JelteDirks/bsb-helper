import {anvaSignCorrection} from "../src/anvaSignCorrection";


describe('corrected ANVA minus sign', () => {

    test('return same ,- value', () => {
        expect(anvaSignCorrection('10,-')).toMatch('10,-');
    });

    test('switch around -', () => {
        expect(anvaSignCorrection('10-')).toMatch('-10');
    });

    test('switch around - with decimals', () => {
        expect(anvaSignCorrection('10,00-')).toMatch('-10,00');
    });

    test('return normal number', () => {
        expect(anvaSignCorrection('10')).toMatch('10');
    });

    test('return minus number', () => {
        expect(anvaSignCorrection('-10')).toMatch('-10');
    });
});
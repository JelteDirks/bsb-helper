import {formatCurrency} from "../src/formatCurrency";

describe('format currency in nice local formatting', () => {

    test('base case int', () => {
        expect(formatCurrency('10')).toMatch('10,00');
    });

    test('int with comma', () => {
        expect(formatCurrency('10,50')).toMatch('10,50')
    });

    test('euro sign string', () => {
        expect(formatCurrency('€ 100,40')).toMatch('100,40')
    });

    test('string no number', () => {
        expect(formatCurrency('string no number')).toMatch('0,00')
    });

    test('int with dot separator', () => {
        expect(formatCurrency('10.10')).toMatch('10,10')
    });

    test('int with dot separator and trailing zeros', () => {
        expect(formatCurrency('10.00')).toMatch('10,00')
    });

    test('big number with comma', () => {
        expect(formatCurrency('100000000,90')).toMatch('100.000.000,90')
    });

    test('negative number', () => {
        expect(formatCurrency('-1000')).toMatch('-1.000,00')
    });

    test('negative sign after currency', () => {
        expect(formatCurrency('1000-')).toMatch('-1.000,00')
    });

    test('negative sign after currency with decimal', () => {
        expect(formatCurrency('1000,00-')).toMatch('-1.000,00')
    });

    test('negative sign after currency with decimal and separator', () => {
        expect(formatCurrency('1.618,62-')).toMatch('-1.618,62')
    });

    test('negative number with comma', () => {
        expect(formatCurrency('-1000,80')).toMatch('-1.000,80')
    });

    test('big number with dot separator', () => {
        expect(formatCurrency('10.000.000')).toMatch('10.000.000,00')
    });

    test('big number with comma separator', () => {
        expect(formatCurrency('10,000,000')).toMatch('10.000.000,00')
    });

    test('Number ending with comma dash', () => {
        expect(formatCurrency('10.000,-')).toMatch('10.000,00')
    });

    test('minus', () => {
        expect(formatCurrency('-')).toMatch('0,00')
    });

    test('empty string', () => {
        expect(formatCurrency('')).toMatch('0,00')
    });

    test('no int part, non zero float', () => {
        expect(formatCurrency(',50')).toMatch('0,50');
    });

    test('with euro sign', () => {
        expect(formatCurrency('0,50', '€')).toMatch('€ 0,50');
    });

});
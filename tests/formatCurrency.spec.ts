import {formatCurrency} from "../src/formatCurrency";

describe('format currency in nice local formatting', () => {

    test('base case int', () => {
        expect(formatCurrency('10')).toEqual('10,00');
    });

    test('int with comma', () => {
        expect(formatCurrency('10,50')).toEqual('10,50')
    });

    test('euro sign string', () => {
        expect(formatCurrency('€ 100,40')).toEqual('100,40')
    });

    test('string no number', () => {
        expect(formatCurrency('string no number')).toEqual('0,00')
    });

    test('int with dot separator', () => {
        expect(formatCurrency('10.10')).toEqual('10,10')
    });

    test('int with dot separator and trailing zeros', () => {
        expect(formatCurrency('10.00')).toEqual('10,00')
    });

    test('big number with comma', () => {
        expect(formatCurrency('100000000,90')).toEqual('100.000.000,90')
    });

    test('negative number', () => {
        expect(formatCurrency('-1000')).toEqual('-1.000,00')
    });

    test('negative sign after currency', () => {
        expect(formatCurrency('1000-')).toEqual('-1.000,00')
    });

    test('negative sign after currency with decimal', () => {
        expect(formatCurrency('1000,00-')).toEqual('-1.000,00')
    });

    test('negative sign after currency with decimal and separator', () => {
        expect(formatCurrency('1.618,62-')).toEqual('-1.618,62')
    });

    test('currency with decimal and separator', () => {
        expect(formatCurrency('161,86')).toEqual('161,86')
    });

    test('negative currency decimal starting with 0', () => {
        expect(formatCurrency('-161,02')).toEqual('-161,02')
    });

    test('negative currency behind decimal starting with 0', () => {
        expect(formatCurrency('161,02-')).toEqual('-161,02')
    });

    test('negative currency behind decimal', () => {
        expect(formatCurrency('161,20-')).toEqual('-161,20')
    });

    test('currency with decimal and separator 100k', () => {
        expect(formatCurrency('134.161,8')).toEqual('134.161,80')
    });

    test('negative number with comma', () => {
        expect(formatCurrency('-1000,80')).toEqual('-1.000,80')
    });

    test('big number with dot separator', () => {
        expect(formatCurrency('10.000.000')).toEqual('10.000.000,00')
    });

    test('big number with comma separator', () => {
        expect(formatCurrency('10,000,000')).toEqual('10.000.000,00')
    });

    test('Number ending with comma dash', () => {
        expect(formatCurrency('10.000,-')).toEqual('10.000,00')
    });

    test('minus', () => {
        expect(formatCurrency('-')).toEqual('0,00')
    });

    test('empty string', () => {
        expect(formatCurrency('')).toEqual('0,00')
    });

    test('no int part, non zero float', () => {
        expect(formatCurrency(',50')).toEqual('0,50');
    });

    test('with euro sign', () => {
        expect(formatCurrency('0,50', '€')).toEqual('€ 0,50');
    });

});
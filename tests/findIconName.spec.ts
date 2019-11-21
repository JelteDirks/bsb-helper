import {findIconName} from "../src/findIconName";

describe('find icon name', () => {

    test('should return koffer icon', () => {
        expect(findIconName('3900')).toMatch('29');
    });

    test('should return general document icon from empty string', () => {
        expect(findIconName('')).toMatch('999');
    });

    test('should return general document icon from undefined', () => {
        expect(findIconName(undefined)).toMatch('999');
    });

    test('should return general document icon from unknown branch', () => {
        expect(findIconName('1300')).toMatch('999');
    });

    test('should return fiets icon', () => {
        expect(findIconName('2400')).toMatch('14');
    });

    test('should return document icon from car branch not known', () => {
        expect(findIconName('2101')).toMatch('999');
    });
});

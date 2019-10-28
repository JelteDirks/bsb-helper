import {flatten} from "../../src/flatten";

describe('flatten arrays', () => {

    test('should remain unchanged', () => {
        expect(flatten([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4])
    });

    test('should unnest', () => {
        expect(flatten([1, 2, 3, [4, 5, 6], [7]], [])).toEqual([1, 2, 3, 4, 5, 6, 7])
    });

    test('should remove null|undefined value', () => {
        expect(flatten([1, 2, 3, null, undefined, [4]], [])).toEqual([1, 2, 3, 4]);
    });

    test('should work without initial array', () => {
        expect(flatten([1])).toEqual([1]);
    });

    test('should append to existing array', () => {
        expect(flatten([2], [1])).toEqual([1, 2]);
    });
});

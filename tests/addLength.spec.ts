import {addLength} from "../src/addLength";

describe('fn: add length property to object', () => {

    let obj: object = {};

    beforeEach(() => {
        obj = {
            "1": "first",
            "2": "second",
            "3": {
                "1": "first",
                "2": {}
            }
        }
    });

    test('adds proper length', () => {
        obj = addLength(obj);
        expect(obj["length"]).toBe(3);
    });

    test('does not overwrite', () => {
        obj["length"] = 4;
        obj = addLength(obj);
        expect(obj['length']).toBe(4);
    });

    test('adds length to nested', () => {
        obj = addLength(obj);
        expect(obj['3']['length']).toBe(2);
    });

    test('ignores types other than objects', () => {
        expect(addLength([])).toHaveProperty('length');
    });

    test('full record', () => {
        expect(addLength(require('./data/pre_length_record.json'))).toMatchObject(require('./data/post_length_record.json'));
    });

    test('add length to empty', () => {
        obj = addLength(obj);
        expect(obj['3']['2']['length']).toBe(0);
    })
});

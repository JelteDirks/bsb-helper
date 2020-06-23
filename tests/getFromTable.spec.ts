import {getFromRecord, getFromTable} from "../src/getFromRecord";

const rec = {
    fields: {
        one: '1',
        two: '2'
    },
    tables: {
        first: [
            {
                fields: {
                    three: '3',
                    four: '4'
                },
                tables: {
                    second: [
                        {
                            fields: {
                                five: '5',
                                six: '6'
                            }
                        }
                    ]
                }
            },
            {
                fields: {
                    three: '33',
                    four: '44'
                },
                tables: {
                    second: [
                        {
                            fields: {
                                five: '55',
                                six: '66'
                            }
                        }
                    ]
                }
            }
        ]
    }
}

describe('getting values from record by path', () => {

    test('root field level', () => {
        const value = getFromRecord('one', <OLRecord><any>rec);
        expect(value).toBe('1');

        const value2 = getFromRecord('two', <OLRecord><any>rec);
        expect(value2).toBe('2');
    });

    test('first level table', () => {
        const value = getFromRecord('first[three=3].four', <OLRecord><any>rec);
        expect(value).toBe('4');
    });

    test('second level table', () => {
        const value = getFromRecord('first[three=33].second[five=55].six', <OLRecord><any>rec);
        expect(value).toBe('66');
    });

    test('incorrect path', () => {
        const value = getFromRecord('first[three=4].second[five=55].six', <OLRecord><any>rec);
        expect(value).toBeNull();
    });

    test('non existing field', () => {
        const value = getFromRecord('three', <OLRecord><any>rec);
        expect(value).toBeNull();
    });
});

describe('getting values from OL tables', () => {

    test('level 1 table entry', () => {
        const value = getFromTable(<OLRecord><any>rec.tables.first, 'three', '3');
        expect(value).toHaveProperty('fields');
        expect(value.fields.three).toBe('3');
    });

    test('level 2 table entry', () => {
        const t1 = getFromTable(<OLRecord><any>rec.tables.first, 'three', '3');
        const t2 = getFromTable(t1.tables.second, 'five', '5');
        expect(t2).toHaveProperty('fields');
        expect(t2.fields.five).toBe('5');
    });

});

import {listProperties} from "../src/listProperties";

test('basic property listing', () => {
    const testObject = {
        one: '1',
        two: '2'
    };

    const testResult = [
        {
            key: 'one',
            value: '1'
        },
        {
            key: 'two',
            value: '2'
        }
    ];

    expect(listProperties(testObject)).toMatchObject(testResult);
});

test('empty object literal', () => {
    expect(listProperties({})).toMatchObject([]);
});
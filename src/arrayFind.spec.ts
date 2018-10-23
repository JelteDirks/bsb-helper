import {arrayFind} from "./arrayFind";

let testObject = [
    {
        name: 'Jelte',
        id: 1
    },
    {
        name: 'Huub',
        id: 2
    }
];


test('found', () => {
    let testResult = {
        name: 'Huub',
        id: 2
    };

    expect(arrayFind(testObject, (e) => {
        return e.id > 1;
    })).toMatchObject(testResult);
});

test('not found', () => {
    expect(arrayFind(testObject, e => e.name === 'Hoi')).toBe(undefined);
});
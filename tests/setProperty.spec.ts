import {setProperty} from "../src/setProperty";

let x = {};
let resultx = setProperty(x, 'name', 'jelte');
let y = {name: 'jelte'};
let resulta = setProperty(null, 'name', 'jelte');

test('setting correct property', () => {
    expect(x).toMatchObject(y);
});

test('return value', () => {
    expect(resultx).toBeTruthy();
    expect(resulta).toBeFalsy();
});

test('bad value', () => {
    expect(setProperty(x, 'name', undefined)).toBeFalsy();
});

test('bad name', () => {
    expect(setProperty(x, '', 'jelte')).toBeFalsy();
});
import {nonEmptyProperty} from "./nonEmptyProperty";

// @ts-ignore
test('basic property check', () => {
    expect(nonEmptyProperty({
        prop: 'hello'
    }, 'prop')).toBeTruthy();
});

// @ts-ignore
test('faulty property check', () => {
    expect(nonEmptyProperty({
        prop: 'hello'
    }, 'nope')).toBeFalsy();
});

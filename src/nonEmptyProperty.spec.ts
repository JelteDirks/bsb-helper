import {nonEmptyProperty} from "./nonEmptyProperty";

test('basic property check', () => {
    expect(nonEmptyProperty({
        prop: 'hello'
    }, 'prop')).toBeTruthy();
});

test('faulty property check', () => {
    expect(nonEmptyProperty({
        prop: 'hello'
    }, 'nope')).toBeFalsy();
});

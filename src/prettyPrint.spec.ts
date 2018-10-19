import {prettyPrint} from "./prettyPrint";

test('upper case replacement', () => {
    expect(prettyPrint('h')).toBe('H');
});

test('basic replacement', () => {
    expect(prettyPrint('jelte_dirks')).toBe('Jelte dirks');
});
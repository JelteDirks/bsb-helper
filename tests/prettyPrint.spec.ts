import {prettyPrint} from "../src/prettyPrint";

test('upper case replacement', () => {
    expect(prettyPrint('h')).toBe('H');
});

test('basic replacement', () => {
    expect(prettyPrint('jelte_dirks')).toBe('Jelte dirks');
});

test('Replace x', () => {
    expect(prettyPrint('x__dit_is_een_string')).toBe('Dit is een string');
});

test('Replace multiple', () => {
    expect(prettyPrint('x__is_dit_een___procent___string__vraag__')).toBe('Is dit een % string?');
});


test('Replace euro', () => {
    expect(prettyPrint('euro__is_dit_een___procent___string__vraag__')).toBe('Is dit een % string?');
});



import {removeLeadingCharacters} from "../src/removeLeadingCharacters";

describe('remove leading characters', () => {

    test('basic', () => {
        expect(removeLeadingCharacters("00145", "0")).toMatch("145");
    });

    test('with sub string', () => {
        expect(removeLeadingCharacters("0000520145", "0")).toMatch("520145");
    });

    test('special character', () => {
        expect(removeLeadingCharacters("////145", "/")).toMatch("145");
    });

    test('multiple chars', () => {
        expect(removeLeadingCharacters("/////145", "//")).toMatch("/145");
    });

    test('no change', () => {
        expect(removeLeadingCharacters("/0000", "0")).toMatch("/0000");
    });
});
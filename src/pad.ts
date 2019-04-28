/**
 * Pads a string with another string until it has reached a certain length.
 * @param {string} value        Value that should be padded with the character until it has the length
 * @param {string} character    Character that should be added to the value
 * @param {number} length       The length at which the padding should stop.
 * @return {string}
 */
export function pad(value: string, character: string, length: number): string {
    for (let i = 0; (value.length + character.length) < (length + 1); i++) {
        value = character + value;
    }

    return value;
}

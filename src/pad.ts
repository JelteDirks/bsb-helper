export function pad(value: string, character: string, length: number): string {
    for (let i = 0; (value.length + character.length) < (length + 1); i++) {
        value = character + value;
    }

    return value;
}
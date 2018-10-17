export function pad(value: string, character: string, length: number): string {
    for (let i = 0; value.length < length; i++) {
        value = character + value;
    }

    return value;
}
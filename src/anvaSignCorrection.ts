export function anvaSignCorrection(value: string): string {
    if (!value.endsWith('-') || value.endsWith(',-')) return value;
    value.slice(-1);
    return '-'+value;
}
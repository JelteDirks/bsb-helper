export function listProperties(obj: { [key: string]: any }): { key: string, value: any }[] {
    return Object.keys(obj).map(function (key) {
        return {
            key: key,
            value: obj[key]
        };
    });
}
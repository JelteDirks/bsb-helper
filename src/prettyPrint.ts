export function prettyPrint(value: string): string {

    let regex = /^(x|jaar|km)__/g;
    value = value.replace(regex, '');
    value = value.replace(/__procent__/g, '%');
    value = value.replace(/__vraag__/g, '?');
    value = value.replace(/_/g, ' ');
    value = value.substring(0,1).toUpperCase()+value.substring(1, value.length);

    return value;
}
export function convertCheckboxValue(value: string) {

    const re: { regexp: RegExp, replaceVal: string }[] = [
        {
            regexp: new RegExp('^on$'),
            replaceVal: 'Ja'
        },
        {
            regexp: new RegExp('^0$'),
            replaceVal: 'Nee'
        }
    ];

    re.forEach((r: RegExpCheckObj) => {
        if (r.regexp.test(value)) {
            value = value.replace(r.regexp, r.replaceVal);
        }
    });

    return value;
}

export interface RegExpCheckObj {
    regexp: RegExp;
    replaceVal: string;
}

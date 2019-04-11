export function questionTypeCheck(name: string, value: string): string|undefined {

    if (value == '') {
        return;
    }
    if (/^euro__/.test(name)) {

        return 'euro';
    } else if (/^x__/.test(name)) {
        let original_name = name.replace(/^x__/, '');
        return 'percent';
    } else if (/^jaar__/.test(name)) {
        let original_name = name.replace(/^jaar__/, '');
        return 'jaar';
    } else if (/^km__/.test(name)) {
        let original_name = name.replace(/^km__/, '');
        return 'km';
    } else if (/^mainswitch_/.test(name) || /^status_/.test(name)) {
        return;
    } else {
        return 'default';
    }
}
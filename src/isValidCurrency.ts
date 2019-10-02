export function isValidCurrency(val: string, decSep: string) {
    const eu = new RegExp(`(?=.*\\d)^-?[0-9]\\d{0,2}(\\.\\d{3})*(,\\d{2})?$`);
    const us = new RegExp(`(?=.*\\d)^-?[0-9]\\d{0,2}(,\\d{3})*(\\.\\d{2})?$`);

    return (decSep === "," ? eu : us).test(val);
}

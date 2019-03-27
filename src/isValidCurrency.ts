export function isValidCurrency(val: string, decSep: string) {
    return (decSep === "," ? new RegExp(`(?=.*\\d)^-?[0-9]\\d{0,2}(\\.\\d{3})*(,\\d{2})?$`) :
        new RegExp(`(?=.*\\d)^-?[0-9]\\d{0,2}(,\\d{3})*(\\.\\d{2})?$`)).test(val);
}

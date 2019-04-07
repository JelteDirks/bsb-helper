export function removeLeadingCharacters(variable: string, character: string) {
    while (variable.charAt(0) === character) {
        variable = variable.substr(1, variable.length - 1);
    }

    return variable;
}
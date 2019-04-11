export function prettyPrint(value: string): string {
    return Array.prototype.map.call(value, function (character: string, index: number) {
        if (index === 0) return character.toUpperCase();
        if (character === "__procent__") return "%";
        if (character === "__vraag__") return "?";
        if (character === "_") return " ";
        return character;
    }).join("");
}
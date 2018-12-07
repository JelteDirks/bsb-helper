import {keepChar} from "./keepChar";

export function keepCapitals(v: string): string {
    const c = [];
    for (let i = 60; i < 91; i++) c.push(i);
    return keepChar(v, c);
}
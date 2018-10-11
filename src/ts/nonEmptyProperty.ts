function nonEmptyProperty(obj: Object, property: string): boolean {
    if (!obj[property]) return false;
}

export {nonEmptyProperty};
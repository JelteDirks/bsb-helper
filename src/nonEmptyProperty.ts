function nonEmptyProperty(obj: Object, property: string): boolean {
    return !!(obj[property]);
}

export {nonEmptyProperty};
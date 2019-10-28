export function flatten(A: any[], result: any[] = []): any[] {

    A.forEach(e => {
        if (e === null || e === undefined) return;
        if (e instanceof Array) return flatten(e, result);
        result.push(e);
    });

    return result;
}

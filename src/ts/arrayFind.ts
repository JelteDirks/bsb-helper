export function arrayFind(arr: any[], predicate: { (element: any): boolean }, _this: any): any {
    let result: any = null;

    let found: boolean = arr.some((e) => {
        result = e;
        return predicate.call(_this, e);
    });

    return found ? result : void 0;
}
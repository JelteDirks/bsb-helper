export function arrayFind(arr: any[], predicate: { (element: any): boolean }, _this?: any): any | undefined {
    let result: any = null;

    let found: boolean = Array.prototype.some.call(arr, (e) => {
        result = e;
        return predicate.call(_this, e);
    });

    return found ? result : void 0;
}
export function arrayFind(arr: any[]|OLRecord, predicate: { (element: any): boolean }, _this?: any): any | undefined | OLRecord {
    let result: any = null;

    let found: boolean = Array.prototype.some.call(arr, (e) => {
        result = e;
        return predicate.call(_this, e);
    });

    return found ? result : void 0;
}
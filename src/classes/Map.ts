export class Map {

    private internals = {};

    public set(key: string | number, value: any) {
        this.internals[key] = value;
    }

    public get(key: string | number) {
        return this.internals[key];
    }

    public has(key: string | number) {
        return this.internals.hasOwnProperty(key);
    }

    public delete(key: string | number) {
        delete this.internals[key];
    }

    public clear() {
        Object.keys(this.internals).forEach((key) => {
            delete this.internals[key];
        });
    }

    public size() {
        return Object.keys(this.internals).length;
    }
}

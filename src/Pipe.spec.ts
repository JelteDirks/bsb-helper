import {Pipe} from "./Pipe";

test('basic chaining', () => {
    function addX(a: number) {
        return a + 10;
    }

    let p = new Pipe(0);
    p.add(addX);
    expect(p.getValue()).toBe(0);
    p.run();
    expect(p.getValue()).toBe(10);
});
import {Pipe} from "../src/Pipe";

test('initial value', () => {
    let p = new Pipe('value');
    expect(p.getValue()).toBe('value');
});

test('value setter', () => {
    let p = new Pipe('');
    p.setValue(10);
    expect(p.getValue()).toBe(10);
});

test('basic chaining', () => {
    function addX(a: number) {
        return a + 10;
    }

    let p = new Pipe(0);
    p.addFunction(addX);
    expect(p.getValue()).toBe(0);
    p.run();
    expect(p.getValue()).toBe(10);
});

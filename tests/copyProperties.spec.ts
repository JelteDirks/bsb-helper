import {copyProperties} from "../src/copyProperties";

test('basic copy', () => {
    let x = {name: 'jelte'};
    let y = {age: 10};
    x = copyProperties(x, y);
    let z = {name: 'jelte', age: 10};
    expect(x).toMatchObject(z)
});

test('no copy', () => {
    let x = {};
    let y = {age: 10};
    x = copyProperties(x, y);
    expect(x).toMatchObject(y);
});

test('override', () => {
    let x = {name: 'jelte'};
    let y = {name: 'peter'};
    y = copyProperties(x, y);
    let z = {name: 'jelte'};
    expect(y).toMatchObject(z);
});

test('undefined original', () => {
    let x = {name: 'jelte'};
    x = copyProperties(undefined, x);
    let y = {name: 'jelte'};
    expect(x).toMatchObject(y);
});

test('undefined copy', () => {
    expect(() => {
        copyProperties({}, undefined);
    }).toThrowError(Error("Cannot copy properties to a non-existing object. Make sure you check object before copying."));
});

test('class copy', () => {
    class X {
        public name = "jelte";
    }

    class Y {
        public age = 10;
    }

    class Z {
        public name = "jelte";
        public age = 10;
    }

    let x = new X();
    let y = new Y();
    let z = new Z();

    copyProperties(x, y);

    expect(y).toMatchObject(z);
});
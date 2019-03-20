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
    let target = {name: 'jelte'};
    let source = {name: 'peter'};
    copyProperties(target, source);
    let expected = {name: 'peter'};
    expect(target).toMatchObject(expected);
});

test('undefined original', () => {
    let source = {name: 'jelte'};
    source = copyProperties(source, undefined);
    let expected = {name: 'jelte'};
    expect(source).toMatchObject(expected);
});

test('undefined copy', () => {
    expect(() => {
        copyProperties(undefined, {});
    }).toThrowError(Error("Cannot copy properties to a non-existing object. Make sure you check object before copying."));
});

test('class copy', () => {
    class Source {
        public name = "jelte";
    }

    class Target {
        public age = 10;
    }

    class Expected {
        public name = "jelte";
        public age = 10;
    }

    let source = new Source();
    let target = new Target();
    let expected = new Expected();

    copyProperties( target, source);

    expect(target).toMatchObject(expected);
});

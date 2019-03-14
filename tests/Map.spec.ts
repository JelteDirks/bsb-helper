import {Map} from "../src/classes/Map";

const map = new Map();

test('set / get property', () => {
    map.set("key", 10);
    expect(map.get("key")).toEqual(10);
});

test('has property', () => {
    map.set("key", 10);
    expect(map.has("key")).toBeTruthy();
});

test('size getting', () => {
    map.set("key", 10);
    map.set("key2", 102);
    expect(map.size()).toEqual(2);
});

test('clear all', () => {
    map.set("key", "anything");
    map.set("key2", "anything2");
    expect(map.size()).toEqual(2);
    map.clear();
    expect(map.size()).toEqual(0);
});

test('delete property', () => {
    map.set("key", 10);
    expect(map.has("key")).toBeTruthy();
    map.delete("key");
    expect(map.has("key")).toBeFalsy();
});


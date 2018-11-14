import {millisToDays} from "../src/millisToDays";

test('basic positive millis', () => {
    expect(millisToDays(1000000000)).toBe(11.57);
});

test('basic negative millis', () => {
    expect(millisToDays(-1000000000)).toBe(-11.57);
});
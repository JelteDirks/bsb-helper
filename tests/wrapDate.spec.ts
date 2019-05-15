import {wrapDate} from "../src/wrapDate";

test('no class', () => {
    expect(wrapDate('1900-12-12')).toEqual(`<span class="date">1900-12-12</span>`)
});

test('custom class', () => {
    expect(wrapDate('1900-12-12', 'dateField')).toEqual(`<span class="dateField">1900-12-12</span>`)
});

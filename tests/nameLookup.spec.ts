import {nameLookup, nameDatabase, NameDatabaseInstance} from "../src/nameLookup";

test('unique id', () => {
    let a = [];
    let duplicate = nameDatabase.some((e: NameDatabaseInstance) => {
        if (a.indexOf(e.id) > -1) return true;
        a.push(e.id);
    });
    expect(duplicate).toBeFalsy();
});

test('lookup id', () => {
    expect(nameLookup.id('test_waarde')).toMatch('Test waarde');
});

test('lookup name', () => {
    expect(nameLookup.name('Test waarde')).toMatch('test_waarde');
});
import {findInRecord} from "../src/findInRecord";

describe('findInRecord', () => {

    test('should return string', () => {
        const r = {
            fields: {
                aanhef: "Geachte heer Dirks,",
                agent_naam: "asdf"
            },
            table: []
        };
        expect(typeof findInRecord(<OLRecord><any>r, "aanhef")).toMatch("string");
    });

    test('should return with at least length 1', () => {
        const r = {
            fields: {
                aanhef: "Geachte heer Dirks,",
                agent_naam: "asdf"
            }
        };
        expect(findInRecord(<OLRecord><any>r, "aanhef")).toBeTruthy();
    });

    test('value should be correct', () => {
        const r = {
            fields: {
                aanhef: "Geachte heer Dirks,",
                agent_naam: "asdf"
            }
        };

        expect(findInRecord(<OLRecord><any>r, "aanhef")).toMatch("Geachte heer Dirks,");
        expect(findInRecord(<OLRecord><any>r, "agent_naam")).toMatch("asdf");
    });

    test('should return empty string if not found', () => {
        const r = {
            fields: {
                aanhef: "Geachte heer Dirks,",
                agent_naam: "asdf"
            }
        };

        expect(findInRecord(<OLRecord><any>r, "contactpersoon")).toMatch("");
    });

    test('should return empty string', () => {
        const r = {
            fields: {
                aanhef: "Geachte heer Dirks,",
                agent_naam: "asdf",
                contactpersoon: ""
            }
        };

        expect(findInRecord(<OLRecord><any>r, "contactpersoon")).toMatch("");
    });
});

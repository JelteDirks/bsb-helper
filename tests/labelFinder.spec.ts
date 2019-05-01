import {labelFinder} from "../src/labelFinder";

describe('labelFinder', () => {

    let dummyData;
    let lf;

    beforeAll(() => {
        dummyData = [
            {
                fields: {
                    number: 'L10142',
                    code: '10142 CODE',
                    omsch: '10142 OMSCH',
                    value: ''
                }
            },
            {
                fields: {
                    number: 'L00001',
                    code: '',
                    omsch: '',
                    value: '59383'
                }
            }
        ];
        lf = labelFinder.bind(dummyData);
    });

    test('regular label', () => {
        expect(lf('00001')).toMatch('59383');
    });

    test('code label', () => {
        expect(lf('10142c')).toMatch('10142 CODE');
    });

    test('omsch label', () => {
        expect(lf('10142o')).toMatch('10142 OMSCH');
    });

    test('undefined label should throw error', () => {
        expect(() => {
            lf(void 0);
        }).toThrowError(Error('label to be found is undefined'));
    });

    test('no bound record should throw error', () => {
        expect(() => {
            labelFinder('10142c');
        }).toThrowError(Error('bound record has no length property, check if it is a correct record'));
    });
});



import {labelFinder} from "../src/labelFinder";

const dummyData = [
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
const lf = labelFinder.bind(dummyData);

test('regular label', () => {
    expect(lf('00001')).toMatch('59383');
});
test('code label', () => {
    expect(lf('10142c')).toMatch('10142 CODE');
});
test('omsch label', () => {
    expect(lf('10142o')).toMatch('10142 OMSCH');
});


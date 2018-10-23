import {filterEmptyProperties} from "./filterEmptyProperties";

let testObj = [
    {
        name: 'y',
        prop: 1
    },
    {
        name: 'x',
        prop: 'y'
    },
    {
        name: 1,
        prop: 0
    },
    {
        name: '1'
    }
];

test('basic', () => {
    let result = [
            {
                name: 'y',
                prop: 1
            },
            {
                name: 'x',
                prop: 'y'
            }
        ]
    ;
    expect(filterEmptyProperties(testObj, 'prop')).toMatchObject(result);
});

test('no removal', () => {
    expect(filterEmptyProperties(testObj, 'name')).toMatchObject(testObj);
});

test('basic multi', () => {
    let result = [
        {
            name: 'y',
            prop: 1
        },
        {
            name: 'x',
            prop: 'y'
        }
    ];
    expect(filterEmptyProperties(testObj, ['name', 'prop'])).toMatchObject(result);
});


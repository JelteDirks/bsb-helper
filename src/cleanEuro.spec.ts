import {addEuroToAnswer, cleanEuroFromQuestion, needsEuroCleaning} from "./cleanEuro";

test('add euro', () => {
    expect(addEuroToAnswer('10.000,00')).toMatch('€ 10.000,00');
});

test('clean euro', () => {
    expect(cleanEuroFromQuestion('euro__verzekerd_bedrag')).toMatch('verzekerd_bedrag');
});

test('needs euro clean', () => {
    expect(needsEuroCleaning('euro__verzekerd_bedrag')).toBe(true);
});
import {questionTypeCheck} from "../src/questionTypeCheck";

test('question type euro', () => {
    expect(questionTypeCheck("euro__waarde_gelegenheid")).toBe("euro");
});

test('question type percentage', () => {
    expect(questionTypeCheck("x__waarde_gelegenheid")).toBe("percentage");
});

test('question type default', () => {
    expect(questionTypeCheck("ubo_plaats")).toBe("default");
    expect(questionTypeCheck("ubo__voorvoegsel")).toBe("default");
    expect(questionTypeCheck("ubo_voorvoegsel")).toBe("default");
});
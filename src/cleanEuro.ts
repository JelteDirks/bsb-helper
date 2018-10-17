export function addEuroToAnswer(answer: string): string {
    return `€ ${answer}`;
}

export function cleanEuroFromQuestion(question: string): string {
    return question.replace('euro__', '');
}

export function needsEuroCleaning(question: string): boolean {
    return question.indexOf('euro__') > -1;
}
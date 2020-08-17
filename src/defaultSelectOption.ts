export function defaultSelectOption(results: QUERYResults, message: string = 'Maak een keuze') {
    results.each(function (this: QUERYResults) {
        this.append(`<option value="" disabled selected>${message}</option>`)
    });
}
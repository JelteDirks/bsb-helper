export function defaultSelectOption(results: QUERYResults) {
    results.each(function () {

        const q: QUERYResults = this;

        q.append(`<option value="" disabled selected>Maak een keuze</option>`)

    });
}
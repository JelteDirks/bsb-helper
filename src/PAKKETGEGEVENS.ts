import {nonEmptyString} from "./nonEmptyString";

const PAKKETGEGEVENS: PakketoverzichtData[] = [
    {
        description: 'Polisnummer',
        label: '60004',
        check: {
            label: '60004',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Pakketsoort',
        label: '61000o',
        check: {
            label: '61000o',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Pakketnaam',
        label: '70048o',
        check: {
            label: '70048o',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Afgiftereden',
        label: '60017o',
        check: {
            label: '60017o',
            predicate: nonEmptyString
        }
    }
];

const VERZEKERINGNEMER: PakketoverzichtData[] = [
    {
        description: 'Naam',
        label: ['99902', '99505'],
        check: {
            label: '99902',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Adres',
        label: ['00008', '00009', '01024'],
        check: {
            label: '00008',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Postcode & Plaats',
        label: ['00011', '00010'],
        check: {
            label: '00011',
            predicate: nonEmptyString
        }
    },
    {
        description: 'E-mail',
        label: '99899',
        check: {
            label: '99899',
            predicate: nonEmptyString
        },
        constant: 'Nog niet bekend'
    }
];

const POLISGEGEVENS: PakketoverzichtData[] = [
    {
        description: 'Ingangsdatum',
        label: '60008',
        check: {
            label: '60008',
            predicate: nonEmptyString
        }
    },
    {
        description: 'Premievervaldatum',
        label: '60006',
        check: {
            label: '60006',
            predicate: [nonEmptyString, pakketcodeIsNot47]
        }
    },
    {
        description: 'Hoofdvervaldatum',
        label: '61001',
        check: {
            label: '61001',
            predicate: [nonEmptyString, pakketcodeIsNot47]
        }
    },
    {
        description: 'Pakketkorting',
        label: '61051',
        check: {
            label: '61051',
            predicate: [nonEmptyString, pakketcodeIsNot47]
        }
    },
    {
        description: 'Einddatum pakket',
        label: '60031',
        check: {
            label: '60031',
            predicate: [nonEmptyString, pakketcodeIs47]
        }
    },
    {
        description: 'Ingangsdatum',
        label: '60008',
        check: {
            label: '60008',
            predicate: nonEmptyString
        }
    }
];

function pakketcodeIs47(l: string) {
    return this.labelFinder('61000') === '00047';
}

function pakketcodeIsNot47(l: string) {
    return this.labelFinder('61000') !== '00047';
}

interface PakketoverzichtData {
    description: string;
    label?: string | string[];
    constant?: string;
    check?: CheckObject;
}

interface CheckObject {
    label: string | string[];
    predicate: ((l: string) => boolean) | ((l: string) => boolean)[];
}

export {PAKKETGEGEVENS, POLISGEGEVENS, VERZEKERINGNEMER, PakketoverzichtData, CheckObject}

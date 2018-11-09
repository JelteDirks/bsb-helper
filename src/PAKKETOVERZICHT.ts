const PAKKETOVERZICHT: PakketoverzichtData[] = [
    {
        description: 'Polisnummer',
        label: '60004',
        check: '60004'
    }
];

interface PakketoverzichtData {
    description: string;
    label?: string;
    constant?: string;
    template?: string;
    check?: string | string[];
    default?: string;
}

export {PAKKETOVERZICHT, PakketoverzichtData}
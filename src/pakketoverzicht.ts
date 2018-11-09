const pakketoverzichtData: PakketoverzichtData[] = [
    {
        description: 'Polisnummer',
        value: '60004',
        check: '60004'
    }
];

interface PakketoverzichtData {
    description: string;
    value: string;
    check?: string | string[];
    default?: string;
}

export {pakketoverzichtData, PakketoverzichtData}
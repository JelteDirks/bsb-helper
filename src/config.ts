const FORMS: FormInfo[] = [
    {
        number: 'X0100',
        subject: 'Nieuwe polis'
    },
    {
        number: 'X0101',
        subject: 'Gewijzigde polis'
    },
    {
        number: 'X0102',
        subject: 'Opschorting verzekering'
    },
    {
        number: 'X0103',
        subject: 'Gewijzigde polis'
    },
    {
        number: 'X0104',
        subject: 'Gewijzigde polis'
    },
    {
        number: 'X0105',
        subject: 'Gewijzigde polis'
    },
    {
        number: 'X0106',
        subject: 'Gewijzigde polis'
    },
    {
        number: 'X0107',
        subject: 'Gewijzigde polis'
    }
];

interface FormInfo {
    number: string;
    subject: string;
}

export {FORMS, FormInfo};

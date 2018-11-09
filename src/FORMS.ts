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
        subject: 'Royement n.a.v. overlijden'
    },
    {
        number: 'X0104',
        subject: 'Beëindiging verzekering'
    },
    {
        number: 'X0105',
        subject: 'Royement i.v.m. wanbetaling'
    },
    {
        number: 'X0106',
        subject: 'Overvoer'
    },
    {
        number: 'X0107',
        subject: 'Uw gewijzigde polis'
    },
    {
        number: 'X0108',
        subject: 'Nieuwe verzekeraar'
    },
    {
        number: 'X0109',
        subject: 'Omzetting TopGarant pakket'
    },
    {
        number: 'X0110',
        subject: 'Omzetting Segway polis'
    },
    {
        number: 'X0111',
        subject: 'Beëindiging polis'
    },
    {
        number: 'X0112',
        subject: 'Nieuwe pakketpolis'
    },
    {
        number: 'X0113',
        subject: 'Uw verzekeringspakket bij Herland'
    },
    {
        number: 'X0114',
        subject: 'Garantie tegen onderverzekering'
    },
    {
        number: 'X0115',
        subject: 'Uw gewijzigigde polis naar aanleiding van het opgaveformulier bedrijfsgegevens'
    },
    {
        number: 'X0116',
        subject: 'Wijziging inboedelverzekering'
    },
    {
        number: 'X0117',
        subject: 'Digitale berekening verzekerde som'
    },
    {
        number: 'X0118',
        subject: 'Pakketomzetting LONDON'
    },
    {
        number: '',
        subject: ''
    }
];

interface FormInfo {
    number: string;
    subject: string;
}

export {FORMS, FormInfo};

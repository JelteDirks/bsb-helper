export function findIconName(branchCode:string): string {
    const icons = [
        {
            icon: "man-met-koffer",
            iconNumber: "02",
            branches: [
                "110"
            ]
        },
        {
            icon: "man-met-gebroken-arm",
            iconNumber: "03",
            branches: [
                "1100"
            ]
        },
        {
            icon: "ehbo-koffer",
            iconNumber: "04",
            branches: [
                "1200"
            ]
        },
        {
            icon: "auto",
            iconNumber: "06",
            branches: [
                "2100"
            ]
        },
        {
            icon: "oldtimer-auto",
            iconNumber: "07",
            branches: [
                "2105"
            ]
        },
        {
            icon: "motor",
            iconNumber: "08",
            branches: [
                "2106",
                "2500"
            ]
        },
        {
            icon: "caravan",
            iconNumber: "09",
            branches: [
                "2200"
            ]
        },
        {
            icon: "stacaravan",
            iconNumber: "10",
            branches: [
                "2220"
            ]
        },
        {
            icon: "aanhanger",
            iconNumber: "11",
            branches: [
                "2230"
            ]
        },
        {
            icon: "bromfiets",
            iconNumber: "12",
            branches: [
                "2300"
            ]
        },
        {
            icon: "segway",
            iconNumber: "13",
            branches: [
                "2302"
            ]
        },
        {
            icon: "fiets",
            iconNumber: "14",
            branches: [
                "2400"
            ]
        },
        {
            icon: "auto-op-brug-onder-dag",
            iconNumber: "16",
            branches: [
                "2600"
            ]
        },
        {
            icon: "drie-autos",
            iconNumber: "17",
            branches: [
                "2605"
            ]
        },
        {
            icon: "bestelauto",
            iconNumber: "18",
            branches: [
                "2700"
            ]
        },
        {
            icon: "vrachtauto",
            iconNumber: "19",
            branches: [
                "2800"
            ]
        },
        {
            icon: "camper",
            iconNumber: "20",
            branches: [
                "2900"
            ]
        },
        {
            icon: "rijdende-bestelauto",
            iconNumber: "21",
            branches: [
                "3100"
            ]
        },
        {
            icon: "stelling-waar-pakje-afvalt",
            iconNumber: "22",
            branches: [
                "3400"
            ]
        },
        {
            icon: "heftruck",
            iconNumber: "23",
            branches: [
                "3500"
            ]
        },
        {
            icon: "computer",
            iconNumber: "24",
            branches: [
                "3600"
            ]
        },
        {
            icon: "boot",
            iconNumber: "25",
            branches: [
                "3700"
            ]
        },
        {
            icon: "kitesurf",
            iconNumber: "26",
            branches: [
                "3715"
            ]
        },
        {
            icon: "golfspullen",
            iconNumber: "27",
            branches: [
                "3800"
            ]
        },
        {
            icon: "mobiele-telefoon",
            iconNumber: "28",
            branches: [
                "3802"
            ]
        },
        {
            icon: "koffer",
            iconNumber: "29",
            branches: [
                "3900"
            ]
        },
        {
            icon: "diamant",
            iconNumber: "30",
            branches: [
                "5300"
            ]
        },
        {
            icon: "huis",
            iconNumber: "31",
            branches: [
                "5500",
                "5810"
            ]
        },
        {
            icon: "chalet",
            iconNumber: "32",
            branches: [
                "5501"
            ]
        },
        {
            icon: "kantoorgebouw",
            iconNumber: "33",
            branches: [
                "5551"
            ]
        },
        {
            icon: "kantoorgebouw-kapot-glas",
            iconNumber: "34",
            branches: [
                "5554"
            ]
        },
        {
            icon: "stoel-en-lamp",
            iconNumber: "35",
            branches: [
                "5600"
            ]
        },
        {
            icon: "kapotte-bureaustoel",
            iconNumber: "36",
            branches: [
                "5700",
                "5800"
            ]
        },
        {
            icon: "blaadje-brand",
            iconNumber: "37",
            branches: [
                "5850",
                "6600"
            ]
        },
        {
            icon: "computer-papier",
            iconNumber: "38",
            branches: [
                "5900"
            ]
        },
        {
            icon: "computer",
            iconNumber: "39",
            branches: [
                "5901"
            ]
        },
        {
            icon: "gezin-in-handen",
            iconNumber: "40",
            branches: [
                "6100"
            ]
        },
        {
            icon: "mannen-stropdas-in-handen",
            iconNumber: "41",
            branches: [
                "6500"
            ]
        },
        {
            icon: "auto-met-gewond-mannetje",
            iconNumber: "42",
            branches: [
                "6650"
            ]
        },
        {
            icon: "huis-met-geld-en-percentage",
            iconNumber: "43",
            branches: [
                "7000"
            ]
        },
        {
            icon: "eurobiljet",
            iconNumber: "44",
            branches: [
                "7100"
            ]
        },
        {
            icon: "kalender",
            iconNumber: "45",
            branches: [
                "8100"
            ]
        },
        {
            icon: "weegschaal",
            iconNumber: "46",
            branches: [
                "9000"
            ]
        }
    ];

    for (let x of icons) {
        if (x.branches.indexOf(branchCode) >= 0) return x.iconNumber;
    }

    return '999';
}
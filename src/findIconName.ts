export function findIconName(branchCode:string): string {
    const defaultIcon = '999';

    if (!branchCode) return defaultIcon;

    const icons = [
        {
            icon: "man-met-koffer",
            iconNumber: "02",
            branches: [
                "110",
                "9262",
                "9263"
            ]
        },
        {
            icon: "man-met-gebroken-arm",
            iconNumber: "03",
            branches: [
                "1100",
                "1120",
                "1122",
                "1510",
                "1511"
            ]
        },
        {
            icon: "ehbo-koffer",
            iconNumber: "04",
            branches: [
                "1120",
                "1200",
                "1300",
                "1303",
                "1611",
                "1612",
                "1613",
                "1614",
                "1615",
                "1616"
            ]
        },
        {
            icon: "ehbo-koffer-euro",
            iconNumber: "05",
            branches: [
                "1500"
            ]
        },
        {
            icon: "auto",
            iconNumber: "06",
            branches: [
                "2000",
                "2100",
                "2101",
                "2102",
                "2103",
                "2108",
                "2109",
                "2110",
                "2111",
                "2114",
                "2705",
                "9008"
            ]
        },
        {
            icon: "oldtimer-auto",
            iconNumber: "07",
            branches: [
                "2105",
                "2720"
            ]
        },
        {
            icon: "motor",
            iconNumber: "08",
            branches: [
                "2106",
                "2500",
                "2501"
            ]
        },
        {
            icon: "caravan",
            iconNumber: "09",
            branches: [
                "2200",
                "2201",
                "2210"
            ]
        },
        {
            icon: "stacaravan",
            iconNumber: "10",
            branches: [
                "2220",
                "5910"
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
                "2300",
                "2301",
                "2310",
                "2311",
                "2312",
                "2313",
                "2350",
                "2351"
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
                "2305",
                "2400",
                "2401",
                "2410",
                "2415",
                "2420"
            ]
        },
        {
            icon: "auto-met-pech",
            iconNumber: "15",
            branches: [
                "3923"
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
                "2605",
                "2610"
            ]
        },
        {
            icon: "bestelauto",
            iconNumber: "18",
            branches: [
                "2700",
                "2701",
                "2703",
                "2710",
                "2850",
                "2911"
            ]
        },
        {
            icon: "vrachtauto",
            iconNumber: "19",
            branches: [
                "2800",
                "2801",
                "2802"
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
                "3000",
                "3100",
                "3150"
            ]
        },
        {
            icon: "stelling-waar-pakje-afvalt",
            iconNumber: "22",
            branches: [
                "3400",
                "3403",
                "3404",
                "3410"
            ]
        },
        {
            icon: "heftruck",
            iconNumber: "23",
            branches: [
                "3500",
                "3501",
                "3502",
                "3503"
            ]
        },
        {
            icon: "computer",
            iconNumber: "24",
            branches: [
                "3600",
                "3611",
                "3660",
                "5556",
                "5901",
                "5902",
                "5903"
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
                "3800",
                "3801",
                "3905",
                "3906"
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
                "3900",
                "3901",
                "3903",
                "3908",
                "3909",
                "3910",
                "3922",
                "3930",
                "3999"
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
                "5504",
                "5510",
                "5515",
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
                "5551",
                "5570"
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
                "5600",
                "5611",
                "5615"
            ]
        },
        {
            icon: "kapotte-bureaustoel",
            iconNumber: "36",
            branches: [
                "5552",
                "5700",
                "5710",
                "5719",
                "5730",
                "5800",
                "5801"
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
            icon: "hamer",
            iconNumber: "39",
            branches: [
                "6300",
                "6305",
                "6310"
            ]
        },
        {
            icon: "gezin-in-handen",
            iconNumber: "40",
            branches: [
                "6000",
                "6100",
                "6101"
            ]
        },
        {
            icon: "mannen-stropdas-in-handen",
            iconNumber: "41",
            branches: [
                "6200",
                "6311",
                "6500",
                "6501",
                "6165"
            ]
        },
        {
            icon: "auto-met-gewond-mannetje",
            iconNumber: "42",
            branches: [
                "6650",
                "6651",
                "6652"
            ]
        },
        {
            icon: "huis-met-geld-en-percentage",
            iconNumber: "43",
            branches: [
                "70000"
            ]
        },
        {
            icon: "eurobiljet",
            iconNumber: "44",
            branches: [
                "7010",
                "7100",
                "8500"
            ]
        },
        {
            icon: "kalender",
            iconNumber: "45",
            branches: [
                "3310",
                "8100"
            ]
        },
        {
            icon: "weegschaal",
            iconNumber: "46",
            branches: [
                "9000",
                "9001",
                "9002",
                "9003",
                "9004",
                "9006",
                "9009",
                "9012",
                "9100",
                "9101",
                "9102",
                "9110",
                "9200",
                "9210",
                "9230",
                "9231",
                "9232",
                "9233",
                "9240",
                "9242",
                "9243",
                "9244",
                "9245",
                "9246",
                "9247",
                "9248",
                "9249",
                "9250",
                "9260",
                "9500"
            ]
        },
        {
            icon: "muzieknoot",
            iconNumber: "47",
            branches: [
                "5610"
            ]
        },
        {
            icon: "computer-met-slot",
            iconNumber: "48",
            branches: [
                "6550"
            ]
        }
    ];

    branchCode = branchCode.replace(/^0+/, '');
    for (let x of icons) {
        if (x.branches.indexOf(branchCode) >= 0) return x.iconNumber;
    }

    return defaultIcon;
}
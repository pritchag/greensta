ddg.registerClass({
    name: "greensta.data",

    staticDef: {
        startYear: 1970,
        endYear: 2032,

        1970: { gas: 13.07235232, electricity: 9.867629362, car: 7.404803749, pubtran: 8.636216556 },
        1971: { gas: 14.19084236, electricity: 10.83032491, car: 7.873462214, pubtran: 9.351893562 },
        1972: { gas: 14.95980426, electricity: 11.6325712, car: 8.0609256, pubtran: 9.8467484 },
        1973: { gas: 15.09961552, electricity: 11.87324509, car: 8.529584066, pubtran: 10.20141458 },
        1974: { gas: 15.86857742, electricity: 14.36020858, car: 12.0913884, pubtran: 13.22579849 },
        1975: { gas: 18.31527438, electricity: 20.85840353, car: 16.44991213, pubtran: 18.65415783 },
        1976: { gas: 22.4397064, electricity: 25.99277978, car: 17.48096075, pubtran: 21.73687027 },
        1977: { gas: 26.14470465, electricity: 29.60288809, car: 18.74633861, pubtran: 24.17461335 },
        1978: { gas: 26.91366655, electricity: 32.65142399, car: 17.80902168, pubtran: 25.23022283 },
        1979: { gas: 27.89234533, electricity: 35.459286, car: 23.43292326, pubtran: 29.44610463 },
        1980: { gas: 32.57602237, electricity: 45.08624148, car: 29.99414177, pubtran: 37.54019162 },
        1981: { gas: 41.03460329, electricity: 54.23184918, car: 35.47744581, pubtran: 44.85464749 },
        1982: { gas: 51.10101363, electricity: 59.52667469, car: 38.2893966, pubtran: 48.90803565 },
        1983: { gas: 57.25270884, electricity: 61.69273967, car: 40.96074985, pubtran: 51.32674476 },
        1984: { gas: 59.34987767, electricity: 62.57521059, car: 42.36672525, pubtran: 52.47096792 },
        1985: { gas: 61.726669, electricity: 64.58082631, car: 45.08494435, pubtran: 54.83288533 },
        1986: { gas: 62.84515904, electricity: 65.94464501, car: 39.22671353, pubtran: 52.58567927 },
        1987: { gas: 62.31792274, electricity: 65.6167979, car: 39.56862745, pubtran: 52.59271268 },
        1988: { gas: 62.76124129, electricity: 69.16010499, car: 39.1372549, pubtran: 54.14867994 },
        1989: { gas: 65.42115263, electricity: 74.21259843, car: 41.92156863, pubtran: 58.06708353 },
        1990: { gas: 69.91766941, electricity: 80.18372703, car: 46.8627451, pubtran: 63.52323607 },
        1991: { gas: 74.79417353, electricity: 88.25459318, car: 50.35294118, pubtran: 69.30376718 },
        1992: { gas: 74.60417986, electricity: 92.84776903, car: 51.80392157, pubtran: 72.3258453 },
        1993: { gas: 71.75427486, electricity: 92.51968504, car: 55.92156863, pubtran: 74.22062683 },
        1994: { gas: 76.06079797, electricity: 95.60367454, car: 58.47058824, pubtran: 77.03713139 },
        1995: { gas: 78.65737809, electricity: 96.9160105, car: 61.49019608, pubtran: 79.20310329 },
        1996: { gas: 78.72070931, electricity: 96.45669291, car: 64.58823529, pubtran: 80.5224641 },
        1997: { gas: 77.96073464, electricity: 91.86351706, car: 71.01960784, pubtran: 81.44156245 },
        1998: { gas: 75.30082331, electricity: 87.66404199, car: 74.54901961, pubtran: 81.1065308 },
        1999: { gas: 74.85750475, electricity: 86.54855643, car: 80.82352941, pubtran: 83.68604292 },
        2000: { gas: 73.0208993, electricity: 84.77690289, car: 91.45098039, pubtran: 88.11394164 },
        2001: { gas: 74.98416719, electricity: 83.98950131, car: 86.78431373, pubtran: 85.38690752 },
        2002: { gas: 79.73400887, electricity: 84.4488189, car: 84.03921569, pubtran: 84.24401729 },
        2003: { gas: 81.19062698, electricity: 85.30183727, car: 87.05882353, pubtran: 86.1803304 },
        2004: { gas: 87.14376187, electricity: 90.35433071, car: 91.92156863, pubtran: 91.13794967 },
        2005: { gas: 100, electricity: 100, car: 100, pubtran: 100 },
        2006: { gas: 131.8556048, electricity: 121.6535433, car: 105.4901961, pubtran: 113.5718697 },
        2007: { gas: 142.0519316, electricity: 131.4304462, car: 108.3529412, pubtran: 119.8916937 },
        2008: { gas: 170.1076631, electricity: 151.9028871, car: 124.6666667, pubtran: 138.2847769 },
        2009: { gas: 193.4768841, electricity: 158.7926509, car: 114.745098, pubtran: 136.7688745 },
        2010: { gas: 182.0139329, electricity: 154.855643, car: 134.0784314, pubtran: 144.4670372 },
        2011: { gas: 201.3932869, electricity: 166.0761155, car: 153.4901961, pubtran: 159.7831558 },
        2012: { gas: 193.1603873, electricity: 202.8198814, car: 177.8400005, pubtran: 191.1686203 },
        2013: { gas: 204.4675526, electricity: 214.608461, car: 189.7723935, pubtran: 203.0382912 },
        2014: { gas: 216.4366134, electricity: 227.0822328, car: 202.5054049, pubtran: 215.6449506 },
        2015: { gas: 229.1063154, electricity: 240.2810225, car: 216.0927534, pubtran: 229.0343583 },
        2016: { gas: 242.5176728, electricity: 254.2469707, car: 230.5917617, pubtran: 243.2551151 },
        2017: { gas: 256.7141001, electricity: 269.0246671, car: 246.0635987, pubtran: 258.3588395 },
        2018: { gas: 271.7415537, electricity: 284.6612934, car: 262.5735376, pubtran: 274.4003551 },
        2019: { gas: 287.64868, electricity: 301.2067735, car: 280.1912311, pubtran: 291.4378893 },
        2020: { gas: 304.4869728, electricity: 318.713933, car: 298.9910054, pubtran: 309.533285 },
        2021: { gas: 322.3109406, electricity: 337.2386679, car: 319.0521735, pubtran: 328.7522249 },
        2022: { gas: 341.1782826, electricity: 356.8401234, car: 340.4593703, pubtran: 349.1644698 },
        2023: { gas: 361.1500753, electricity: 377.5808819, car: 363.3029093, pubtran: 370.8441123 },
        2024: { gas: 382.290971, electricity: 399.5271637, car: 387.6791635, pubtran: 393.8698451 },
        2025: { gas: 404.6694061, electricity: 422.7490378, car: 413.6909724, pubtran: 418.325247 },
        2026: { gas: 428.3578234, electricity: 447.320646, car: 441.4480755, pubtran: 444.2990862 },
        2027: { gas: 453.4329062, electricity: 473.3204394, car: 471.0675755, pubtran: 471.8856426 },
        2028: { gas: 479.9758267, electricity: 500.831429, car: 502.6744321, pubtran: 501.1850499 },
        2029: { gas: 508.0725089, electricity: 529.9414507, car: 536.4019896, pubtran: 532.3036592 },
        2030: { gas: 537.8139062, electricity: 560.7434456, car: 572.3925389, pubtran: 565.3544247 },
        2031: { gas: 569.2962966, electricity: 593.3357569, car: 610.7979182, pubtran: 600.4573142 },
        2032: { gas: 602.6215938, electricity: 627.822444, car: 651.7801535, pubtran: 637.7397442 },

        rebase: function (forYear) {
            if (forYear < this.startYear || forYear > this.endYear) {
                return [];
            }

            var yearEntry = this[forYear],
                energyType;

            var rebaseRatios = {};
            for (energyType in yearEntry) {
                var priceIndex = yearEntry[energyType];
                rebaseRatios[energyType] = 100 / priceIndex;
            }

            var rebased = {};
            for (var i = this.startYear, j = this.endYear; i <= j; i++) {
                var rebasedEntry = rebased[i] = {};
                yearEntry = this[i];

                for (energyType in yearEntry) {
                    rebasedEntry[energyType] = yearEntry[energyType] * rebaseRatios[energyType];
                }
            }

            return rebased;
        }
    }
});
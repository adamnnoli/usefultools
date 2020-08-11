const conversions = {
  Length: {
    picometer: {
      picometer: 1,
      nanometer: 0.001,
      micrometer: 1e-6,
      millimeter: 1e-9,
      centimeter: 1e-10,
      meter: 1e-12,
      kilometer: 1e-15,
      inch: 3.9370078740157E-11,
      foot: 3.2808398950131E-12,
      yard: 1.0936132983377E-12,
      mile: 6.2137119223733E-16,
      "nautical mile": 5.3995680345572E-16,
      "astronomical unit": 6.6845871222684E-24,
      "light year": 1.056970721911E-28,
      parsec: 3.2407792899604E-29,
      angstrom: 0.01,
    },
    nanometer: {
      picometer: 1000,
      nanometer: 1,
      micrometer: 0.001,
      millimeter: 1e-6,
      centimeter: 1e-7,
      meter: 1e-9,
      kilometer: 1e-12,
      inch: 3.9370078740157E-8,
      foot: 3.2808398950131E-9,
      yard: 1.0936132983377E-9,
      mile: 6.2137119223733E-13,
      "nautical mile": 5.3995680345572E-13,
      "astronomical unit": 6.6845871222684E-21,
      "light year": 1.056970721911E-25,
      parsec: 3.2407792899604E-26,
      angstrom: 10,
    },
    micrometer: {
      picometer: 1e6,
      nanometer: 1000,
      micrometer: 1,
      millimeter: 1e-3,
      centimeter: 1e-4,
      meter: 1e-6,
      kilometer: 1e-9,
      inch: 3.9370078740157E-5,
      foot: 3.2808398950131E-6,
      yard: 1.0936132983377E-6,
      mile: 6.2137119223733E-10,
      "nautical mile": 5.3995680345572E-10,
      "astronomical unit": 6.6845871222684E-18,
      "light year": 1.056970721911E-22,
      parsec: 3.2407792899604E-23,
      angstrom: 10000,
    },
    millimeter: {
      picometer: 1e9,
      nanometer: 1e6,
      micrometer: 1000,
      millimeter: 1,
      centimeter: 0.1,
      meter: 1e-3,
      kilometer: 1e-6,
      inch: 0.039370078740157,
      foot: 0.0032808398950131,
      yard: 0.0010936132983377,
      mile: 6.2137119223733E-7,
      "nautical mile": 5.3995680345572E-7,
      "astronomical unit": 6.6845871222684E-15,
      "light year": 1.056970721911E-19,
      parsec: 3.2407792899604E-20,
      angstrom: 1e7,
    },
    centimeter: {
      picometer: 1e10,
      nanometer: 1e7,
      micrometer: 10000,
      millimeter: 10,
      centimeter: 1,
      meter: 0.01,
      kilometer: 1e-5,
      inch: 0.39370078740157,
      foot: 0.032808398950131,
      yard: 0.010936132983377,
      mile: 6.2137119223733E-6,
      "nautical mile": 5.3995680345572E-6,
      "astronomical unit": 6.6845871222684E-14,
      "light year": 1.056970721911E-18,
      parsec: 3.2407792899604E-19,
      angstrom: 1e8,
    },
    meter: {
      picometer: 1e12,
      nanometer: 1e9,
      micrometer: 1e6,
      millimeter: 1000,
      centimeter: 100,
      meter: 1,
      kilometer: 1e-3,
      inch: 39.370078740157,
      foot: 3.2808398950131,
      yard: 1.0936132983377,
      mile: 0.00062137119223733,
      "nautical mile": 0.00053995680345572,
      "astronomical unit": 6.6845871222684E-12,
      "light year": 1.056970721911E-16,
      parsec: 3.2407792899604E-17,
      angstrom: 1e10,
    },
    kilometer: {
      picometer: 1e15,
      nanometer: 1e12,
      micrometer: 1e9,
      millimeter: 1e6,
      centimeter: 100000,
      meter: 1000,
      kilometer: 1,
      inch: 39370.078740157,
      foot: 3280.8398950131,
      yard: 1093.6132983377,
      mile: 0.62137119223733,
      "nautical mile": 0.53995680345572,
      "astronomical unit": 6.6845871222684E-9,
      "light year": 1.056970721911E-13,
      parsec: 3.2407792899604E-14,
      angstrom: 1e13,
    },
    inch: {
      picometer: 2.54e10,
      nanometer: 2.54e7,
      micrometer: 25400,
      millimeter: 25.4,
      centimeter: 2.54,
      meter: 0.0254,
      kilometer: 2.54e-5,
      inch: 1,
      foot: 0.083333333333333,
      yard: 0.027777777777778,
      mile: 1.5782828282828E-5,
      "nautical mile": 1.3714902807775E-5,
      "astronomical unit": 1.6978851290562E-13,
      "light year": 2.6847056336539E-18,
      parsec: 8.2315793964995E-19,
      angstrom: 2.54e8,
    },
    foot: {
      picometer: 3.048e11,
      nanometer: 3.048e8,
      micrometer: 304800,
      millimeter: 304.8,
      centimeter: 30.48,
      meter: 0.3048,
      kilometer: 0.0003048,
      inch: 12,
      foot: 1,
      yard: 0.33333333333333,
      mile: 0.00018939393939394,
      "nautical mile": 0.0001645788336933,
      "astronomical unit": 2.0374621548674E-12,
      "light year": 3.2216467603847E-17,
      parsec: 9.8778952757994E-18,
      angstrom: 3.048e9,
    },
    yard: {
      picometer: 9.144e11,
      nanometer: 9.144e8,
      micrometer: 914400,
      millimeter: 914.4,
      centimeter: 91.44,
      meter: 0.9144,
      kilometer: 0.0009144,
      inch: 36,
      foot: 3,
      yard: 1,
      mile: 0.00056818181818182,
      "nautical mile": 0.00049373650107991,
      "astronomical unit": 6.1123864646023E-12,
      "light year": 9.6649402811542E-17,
      parsec: 2.9633685827398E-17,
      angstrom: 9.144e9,
    },
    mile: {
      picometer: 1.609344e15,
      nanometer: 1.609344e12,
      micrometer: 1.609344e9,
      millimeter: 1.609344e6,
      centimeter: 1609344,
      meter: 1609.344,
      kilometer: 1.609344,
      inch: 63360,
      foot: 5280,
      yard: 1760,
      mile: 1,
      "nautical mile": 0.86897624190065,
      "astronomical unit": 1.07578001777E-8,
      "light year": 1.7010294894831E-13,
      parsec: 5.2155287056221E-14,
      angstrom: 1.609344e13,
    },
    "nautical mile": {
      picometer: 1.852e15,
      nanometer: 1.852e12,
      micrometer: 1.852e9,
      millimeter: 1.852e6,
      centimeter: 185200,
      meter: 1852,
      kilometer: 1.852,
      inch: 72913.385826772,
      foot: 6076.1154855643,
      yard: 2025.3718285214,
      mile: 1.1507794480235,
      "nautical mile": 1,
      "astronomical unit": 1.2379855350441E-8,
      "light year": 1.9575097769792E-13,
      parsec: 6.0019232450067E-14,
      angstrom: 1.852e13,
    },
    "astronomical unit": {
      picometer: 1.495978707E+23,
      nanometer: 1.495978707E+20,
      micrometer: 1.495978707E+17,
      millimeter: 1.495978707E+14,
      centimeter: 14959787070000,
      meter: 149597870700,
      kilometer: 149597870.7,
      inch: 5889679948818.9,
      foot: 490806662401.57,
      yard: 163602220800.52,
      mile: 92955807.273026,
      "nautical mile": 80776388.066955,
      "astronomical unit": 1,
      "light year": 1.5812056939013E-5,
      parsec: 4.8481368118674E-6,
      angstrom: 1.495978706e21,
    },
    "light year": {
      picometer: 9.461e27,
      nanometer: 9.461e24,
      micrometer: 9.461e21,
      millimeter: 9.461e18,
      centimeter: 9.461e17,
      meter: 9.461e15,
      kilometer: 9.461e12,
      inch: 3.7248031496063E+17,
      foot: 3.1040026246719E+16,
      yard: 1.0346675415573E+16,
      mile: 5878792849757.4,
      "nautical mile": 5108531317494.6,
      "astronomical unit": 63242.878763782,
      "light year": 1,
      parsec: 0.30661012862316,
      angstrom: 9.460730472E+25,
    },
    parsec: {
      picometer: 3.085677581e28,
      nanometer: 3.085677581e25,
      micrometer: 3.085677581e22,
      millimeter: 3.085677581e19,
      centimeter: 3.085677581e18,
      meter: 3.085677581e16,
      kilometer: 3.085677581e13,
      inch: 1.2148336933071E+18,
      foot: 1.0123614110892E+17,
      yard: 3.3745380369641E+16,
      mile: 19173511573660,
      "nautical mile": 16661326031317,
      "astronomical unit": 206264.80621425,
      "light year": 3.2614708603742,
      parsec: 1,
      angstrom: 3.085677581E+26,
    },
    angstrom: {
      picometer: 100,
      nanometer: 0.1,
      micrometer: 1e-4,
      millimeter: 1e-7,
      centimeter: 1e-8,
      meter: 1e-10,
      kilometer: 1e-13,
      inch: 3.937007874E-9,
      foot: 3.280839895E-10,
      yard: 1.093613298E-10,
      mile: 6.213711922E-14,
      "nautical mile": 5.399568034E-14,
      "astronomical unit": 6.684587122E-22,
      "light year": 1.057000834E-26,
      parsec: 3.240779289E-27,
      angstrom: 1,
    },
  },
  Area: {
    "square millimeters": {
      "square millimeters": 1,
      "square centimeters": 0.01,
      "square meters": 1e-6,
      "square kilometers": 1e-12,
      "square inches": 0.0015500031000062,
      "square feet": 1.076391041671E-5,
      "square yards": 1.1959900463011E-6,
      "square miles": 3.8610215854245E-13,
      acres: 2.4710538146717E-10,
      hectares: 1e-10,
    },
    "square centimeters": {
      "square millimeters": 100,
      "square centimeters": 1,
      "square meters": 1e-4,
      "square kilometers": 1e-10,
      "square inches": 0.15500031000062,
      "square feet": 0.001076391041671,
      "square yards": 0.00011959900463011,
      "square miles": 3.8610215854245E-11,
      acres: 2.4710538146717E-8,
      hectares: 1e-8,
    },
    "square meters": {
      "square millimeters": 1e6,
      "square centimeters": 10000,
      "square meters": 1,
      "square kilometers": 1e-6,
      "square inches": 1550.0031000062,
      "square feet": 10.76391041671,
      "square yards": 1.1959900463011,
      "square miles": 3.8610215854245E-7,
      acres: 0.00024710538146717,
      hectares: 1e-4,
    },
    "square kilometers": {
      "square millimeters": 1e12,
      "square centimeters": 1e10,
      "square meters": 1e6,
      "square kilometers": 1,
      "square inches": 1550003100.0062,
      "square feet": 10763910.41671,
      "square yards": 1195990.0463011,
      "square miles": 0.38610215854245,
      acres: 247.10538146717,
      hectares: 100,
    },
    "square inches": {
      "square millimeters": 645.16,
      "square centimeters": 6.4516,
      "square meters": 0.00064516,
      "square kilometers": 6.4516e-10,
      "square inches": 1,
      "square feet": 0.0069444444444444,
      "square yards": 0.0007716049382716,
      "square miles": 2.4909766860524E-10,
      acres: 1.5942250790736E-7,
      hectares: 6.4516e-8,
    },
    "square feet": {
      "square millimeters": 92903.04,
      "square centimeters": 929.0304,
      "square meters": 0.09290304,
      "square kilometers": 9.290304e-8,
      "square inches": 144,
      "square feet": 1,
      "square yards": 0.11111111111111,
      "square miles": 3.5870064279155E-8,
      acres: 2.2956841138659E-5,
      hectares: 9.290304e-6,
    },
    "square yards": {
      "square millimeters": 836127.36,
      "square centimeters": 8361.2736,
      "square meters": 0.83612736,
      "square kilometers": 8.3612736E-7,
      "square inches": 1296,
      "square feet": 9,
      "square yards": 1,
      "square miles": 3.228305785124E-7,
      acres: 0.00020661157024793,
      hectares: 8.3612736E-5,
    },
    "square miles": {
      "square millimeters": 2589988110336,
      "square centimeters": 25899881103.36,
      "square meters": 2589988.110336,
      "square kilometers": 2.589988110336,
      "square inches": 4014489600,
      "square feet": 27878400,
      "square yards": 3.098e6,
      "square miles": 3097600,
      acres: 640,
      hectares: 258.9988110336,
    },
    acres: {
      "square millimeters": 4046856422.4,
      "square centimeters": 40468564.224,
      "square meters": 4046.8564224,
      "square kilometers": 0.0040468564224,
      "square inches": 6272640,
      "square feet": 43560,
      "square yards": 4840,
      "square miles": 0.0015625,
      acres: 1,
      hectares: 0.40468564224,
    },
    hectares: {
      "square millimeters": 1e10,
      "square centimeters": 1e8,
      "square meters": 10000,
      "square kilometers": 0.01,
      "square inches": 15500031.000062,
      "square feet": 107639.1041671,
      "square yards": 11959.900463011,
      "square miles": 0.0038610215854245,
      acres: 2.4710538146717,
      hectares: 1,
    },
  },
  Volume: {
    cc: {
      cc: 1,
      milliliter: 1,
      liter: 0.001,
      "cubic meter": 1e-6,
      "fluid ounce": 0.033814022701,
      cup: 0.0042267528377304,
      pint: 0.0021133764188652,
      quart: 0.0010566882094,
      gallon: 0.00026417205235815,
      "cubic inch": 0.061023744094732,
      "cubic feet": 3.5314666721489E-5,
      teaspoon: 0.2028841362,
      tablespoon: 0.0676280454,
    },
    milliliter: {
      cc: 1,
      milliliter: 1,
      liter: 0.001,
      "cubic meter": 1e-6,
      "fluid ounce": 0.033814022701,
      cup: 0.0042267528377304,
      pint: 0.0021133764188652,
      quart: 0.0010566882094,
      gallon: 0.00026417205235815,
      "cubic inch": 0.061023744094732,
      "cubic feet": 3.5314666721489E-5,
      teaspoon: 0.2028841362,
      tablespoon: 0.0676280454,
    },
    liter: {
      cc: 1000,
      milliliter: 1000,
      liter: 1,
      "cubic meter": 0.001,
      "fluid ounce": 33.814022701,
      cup: 4.2267528377304,
      pint: 2.1133764188652,
      quart: 1.0566882094,
      gallon: 0.26417205235815,
      "cubic inch": 61.023744094732,
      "cubic feet": 0.035314666721489,
      teaspoon: 202.8841362,
      tablespoon: 67.6280454,
    },
    "cubic meter": {
      cc: 1e6,
      milliliter: 1e6,
      liter: 1000,
      "cubic meter": 1,
      "fluid ounce": 33814.022701,
      cup: 4226.7528377304,
      pint: 2113.3764188652,
      quart: 1056.6882094,
      gallon: 264.17205235815,
      "cubic inch": 61023.744094732,
      "cubic feet": 35.314666721489,
      teaspoon: 202884.1362,
      tablespoon: 67628.0454,
    },
    "fluid ounce": {
      cc: 29.5735295625,
      milliliter: 29.5735295625,
      liter: 0.0295735295625,
      "cubic meter": 2.95735295625e-5,
      "fluid ounce": 1,
      cup: 0.125,
      pint: 0.0625,
      quart: 0.03125,
      gallon: 0.0078125,
      "cubic inch": 1.80469,
      "cubic feet": 0.00104438,
      teaspoon: 6,
      tablespoon: 2,
    },
    cup: {
      cc: 236.5882364981,
      milliliter: 236.5882364981,
      liter: 0.2365882364981,
      "cubic meter": 0.0002365882364981,
      "fluid ounce": 8,
      cup: 1,
      pint: 0.5,
      quart: 0.25,
      gallon: 0.0625,
      "cubic inch": 14.4375000002,
      "cubic feet": 0.00835503472231875,
      teaspoon: 48,
      tablespoon: 16,
    },
    pint: {
      cc: 473.1764729963,
      milliliter: 473.1764729963,
      liter: 0.4731764729963,
      "cubic meter": 0.0004731764729963,
      "fluid ounce": 16,
      cup: 2,
      pint: 1,
      quart: 0.5,
      gallon: 0.125,
      "cubic inch": 28.8750000003,
      "cubic feet": 0.0167100694,
      teaspoon: 96,
      tablespoon: 32,
    },
    quart: {
      cc: 946.3529459925,
      milliliter: 946.3529459925,
      liter: 0.9463529459925,
      "cubic meter": 0.0009463529459925,
      "fluid ounce": 32,
      cup: 4,
      pint: 2,
      quart: 1,
      gallon: 0.25,
      "cubic inch": 57.7500000007,
      "cubic feet": 0.0334201389,
      teaspoon: 192,
      tablespoon: 64,
    },
    gallon: {
      cc: 3785.41178397,
      milliliter: 3785.41178397,
      liter: 3.78541178397,
      "cubic meter": 0.00378541178397,
      "fluid ounce": 128,
      cup: 16,
      pint: 8,
      quart: 4,
      gallon: 1,
      "cubic inch": 231,
      "cubic feet": 0.1336805556,
      teaspoon: 768,
      tablespoon: 256,
    },
    "cubic inch": {
      cc: 16.3870639997,
      milliliter: 16.3870639997,
      liter: 0.0163870639997,
      "cubic meter": 1.63870639997e-5,
      "fluid ounce": 0.5541125541,
      cup: 0.0692640693,
      pint: 0.0346320346,
      quart: 0.0173160173,
      gallon: 0.004329004328954315,
      "cubic inch": 1,
      "cubic feet": 0.000578704,
      teaspoon: 3.3246753246,
      tablespoon: 1.1082251082,
    },
    "cubic feet": {
      cc: 28316.8465914484,
      milliliter: 28316.8465914484,
      liter: 28.3168465914484,
      "cubic meter": 0.0283168465914484,
      "fluid ounce": 957.5064934954,
      cup: 119.6883116869,
      pint: 59.8441558435,
      quart: 29.9220779217,
      gallon: 7.4805194804,
      "cubic inch": 1728,
      "cubic feet": 1,
      teaspoon: 5745.0389609726,
      tablespoon: 1915.0129869909,
    },
    teaspoon: {
      cc: 4.9289215937,
      milliliter: 4.9289215937,
      liter: 0.0049289215937,
      "cubic meter": 4.9289215937e-6,
      "fluid ounce": 0.1666666667,
      cup: 0.0208333333,
      pint: 0.0104166667,
      quart: 0.005208333333333333,
      gallon: 0.0013020833333333333,
      "cubic inch": 0.30078125,
      "cubic feet": 0.00017406322338164065,
      teaspoon: 1,
      tablespoon: 0.333333,
    },
    tablespoon: {
      cc: 14.7867647811,
      milliliter: 14.7867647811,
      liter: 0.0147867647811,
      "cubic meter": 1.4787647811e-5,
      "fluid ounce": 0.5,
      cup: 0.0625,
      pint: 0.03125,
      quart: 0.015625,
      gallon: 0.00390625,
      "cubic inch": 0.90234375,
      "cubic feet": 0.0005221896701449219,
      teaspoon: 3,
      tablespoon: 1,
    },
  },
  Weight: {
    ounce: {
      ounce: 1,
      pound: 0.062499991732666,
      ton: 3.125e-5,
      milligram: 28349.523125,
      gram: 28.349523125,
      kilogram: 0.028349523125,
      "metric ton": 2.8349523125E-5,
      stone: 0.0044642857142857,
    },
    pound: {
      ounce: 16,
      pound: 1,
      ton: 0.0005,
      milligram: 453592.43,
      gram: 453.59243,
      kilogram: 0.45359243,
      "metric ton": 0.00045359243,
      stone: 0.071428580876954,
    },
    ton: {
      ounce: 32000,
      pound: 2000,
      ton: 1,
      milligram: 9.0718474e8,
      gram: 90718474,
      kilogram: 907.18474,
      "metric ton": 0.90718474,
      stone: 142.85714286,
    },
    milligram: {
      ounce: 3.527396194958E-5,
      pound: 2.2046223302272E-6,
      ton: 1.102311310924388e-9,
      milligram: 1,
      gram: 0.001,
      kilogram: 1e-6,
      "metric ton": 1e-9,
      stone: 1.5747304441777E-7,
    },
    gram: {
      ounce: 0.035274,
      pound: 0.002204622621848776,
      ton: 1.102311310924388e-6,
      milligram: 1000,
      gram: 1,
      kilogram: 0.001,
      "metric ton": 1e-6,
      stone: 0.00015747304441776972,
    },
    kilogram: {
      ounce: 35.274,
      pound: 2.204622621848776,
      ton: 0.001102311310924388,
      milligram: 1e6,
      gram: 1000,
      kilogram: 1,
      "metric ton": 0.001,
      stone: 0.15747304441776972,
    },
    "metric ton": {
      ounce: 35274,
      pound: 2204.622621848776,
      ton: 1.102311310924388,
      milligram: 1e9,
      gram: 1e6,
      kilogram: 1000,
      "metric ton": 1,
      stone: 157.47304441776972,
    },
    stone: {
      ounce: 224,
      pound: 14,
      ton: 0.006999999999859999,
      milligram: 6350293.179873,
      gram: 6350.293179873,
      kilogram: 6.350293179873,
      "metric ton": 0.006350293179873,
      stone: 1,
    },
  },
  Time: {
    millisecond: {
      millisecond: 1,
      seconds: 0.001,
      minutes: 1.6666667e-5,
      hours: 2.7777778e-7,
      days: 1.1574074e-8,
      weeks: 1.6534392e-9,
      months: 3.8026486e-10,
      years: 3.1688739e-11,
      decades: 3.1688739e-12,
      centuries: 3.1688739e-13,
      millennia: 3.1688739e-14,
    },
    seconds: {
      millisecond: 1000,
      seconds: 1,
      minutes: 0.016666667,
      hours: 0.00027777778,
      days: 1.1574074e-5,
      weeks: 1.6534392e-6,
      months: 3.8026486e-7,
      years: 3.1688739e-8,
      decades: 3.1688739e-9,
      centuries: 3.1688739e-10,
      millennia: 3.1688739e-11,
    },
    minutes: {
      millisecond: 60000,
      seconds: 60,
      minutes: 1,
      hours: 0.016666667,
      days: 0.00069444444,
      weeks: 9.9206e-5,
      months: 2.2815892e-5,
      years: 1.9013243e-6,
      decades: 1.9013243e-7,
      centuries: 1.9013243e-8,
      millennia: 1.9013243e-9,
    },
    hours: {
      millisecond: 3.6e6,
      seconds: 3600,
      minutes: 60,
      hours: 1,
      days: 0.041666667,
      weeks: 0.005952381,
      months: 0.0013689535,
      years: 0.00011407946,
      decades: 1.1407946e-5,
      centuries: 1.1407946e-6,
      millennia: 1.1407946e-7,
    },
    days: {
      millisecond: 8.64e7,
      seconds: 86400,
      minutes: 1440,
      hours: 24,
      days: 1,
      weeks: 0.142857,
      months: 0.0328767,
      years: 0.002737907,
      decades: 0.0002737907,
      centuries: 2.737907e-5,
      millennia: 2.737907e-6,
    },
    weeks: {
      millisecond: 6.048e8,
      seconds: 604800,
      minutes: 10080,
      hours: 168,
      days: 7,
      weeks: 1,
      months: 0.22998419,
      years: 0.019165349,
      decades: 0.0019165349,
      centuries: 0.00019165349,
      millennia: 1.9165349e-5,
    },
    months: {
      millisecond: 2.629746e9,
      seconds: 2.629746e6,
      minutes: 43829.1,
      hours: 730.485,
      days: 30.436875,
      weeks: 4.348125,
      months: 1,
      years: 0.083333333,
      decades: 0.0083333333,
      centuries: 0.00083333333,
      millennia: 8.3333333e-5,
    },
    years: {
      millisecond: 3.1556952e10,
      seconds: 3.1556952e7,
      minutes: 525949.2,
      hours: 8765.82,
      days: 365.2425,
      weeks: 52.1775,
      months: 12,
      years: 1,
      decades: 0.1,
      centuries: 0.01,
      millennia: 0.001,
    },
    decades: {
      millisecond: 3.1556952e11,
      seconds: 3.1556952e8,
      minutes: 5259492,
      hours: 87658.2,
      days: 3652.425,
      weeks: 521.775,
      months: 120,
      years: 10,
      decades: 1,
      centuries: 0.1,
      millennia: 0.01,
    },
    centuries: {
      millisecond: 3.1556952e12,
      seconds: 3.1556952e9,
      minutes: 52594920,
      hours: 876582,
      days: 36524.25,
      weeks: 5217.75,
      months: 1200,
      years: 100,
      decades: 10,
      centuries: 1,
      millennia: 0.1,
    },
    millennia: {
      millisecond: 3.1556952e13,
      seconds: 3.1556952e10,
      minutes: 525949200,
      hours: 8765820,
      days: 365242.5,
      weeks: 52177.5,
      months: 12000,
      years: 1000,
      decades: 100,
      centuries: 10,
      millennia: 1,
    },
  },
  Energy: {
    joule: {
      joule: 1,
      kilojoules: 0.001,
      "electron volt": 6.2415096471204e18,
      calorie: 0.2388458966275,
      kilocalorie: 0.0002388458966275,
      BTU: 0.00094708628903179,
      kWh: 2.7777777777778e-7,
      MWh: 2.7777777777778e-10,
      "tonnes of TNT": 2.388458966275e-10,
    },
    kilojoules: {
      joule: 1000,
      kilojoules: 1,
      "electron volt": 6.2415096471204e21,
      calorie: 238.8458966275,
      kilocalorie: 0.2388458966275,
      BTU: 0.94708628903179,
      kWh: 2.7777777777778e-4,
      MWh: 2.7777777777778e-7,
      "tonnes of TNT": 2.388458966275e-7,
    },
    "electron volt": {
      joule: 1.602176487e-19,
      kilojoules: 1.602176487e-22,
      "electron volt": 1,
      calorie: 3.8267327959301e-20,
      kilocalorie: 3.8267327959301 - 23,
      BTU: 1.5173993834468e-22,
      kWh: 4.4504902416667e-26,
      MWh: 4.4504902416667e-29,
      "tonnes of TNT": 3.8267327959301e-29,
    },
    calorie: {
      joule: 4.184,
      kilojoules: 0.004184,
      "electron volt": 2.6131952590564e19,
      calorie: 1,
      kilocalorie: 0.001,
      BTU: 0.0039652608749183,
      kWh: 1.16222e-6,
      MWh: 1.16222e-9,
      "tonnes of TNT": 1e-9,
    },
    kilocalorie: {
      joule: 4184,
      kilojoules: 4.184,
      "electron volt": 2.6131952590564e22,
      calorie: 1000,
      kilocalorie: 1,
      BTU: 3.9652608749183,
      kWh: 1.16222e-3,
      MWh: 1.16222e-6,
      "tonnes of TNT": 1e-6,
    },
    BTU: {
      joule: 1055.87,
      kilojoules: 1.05587,
      "electron volt": 6.590222791105E+21,
      calorie: 252.19021687207,
      kilocalorie: 0.25219021687207,
      BTU: 1,
      kWh: 0.00029329722222222,
      MWh: 0.29329722222222,
      "tonnes of TNT": 2.5219021687207e-7,
    },
    kWh: {
      joule: 3600000,
      kilojoules: 3600,
      "electron volt": 2.2469434729634E+25,
      calorie: 859845.22785899,
      kilocalorie: 859.84522785899,
      BTU: 3409.5106405145,
      kWh: 1,
      MWh: 0.001,
      "tonnes of TNT": 0.0008598452278589,
    },
    MWh: {
      joule: 3600000000,
      kilojoules: 3600000,
      "electron volt": 2.2469434729634E+28,
      calorie: 859845227.85899,
      kilocalorie: 859845.22785899,
      BTU: 3409510.6405145,
      kWh: 1000,
      MWh: 1,
      "tonnes of TNT": 0.8598452278589,
    },
    "tonnes of TNT": {
      joule: 4.184e9,
      kilojoules: 4.184e6,
      "electron volt": 2.6131952590564e28,
      calorie: 1e9,
      kilocalorie: 1e6,
      BTU: 3.9652608749183e6,
      kWh: 1162.22,
      MWh: 1.16222,
      "tonnes of TNT": 1,
    },
  },
  Power: {
    watts: {
      watts: 1,
      kilowatts: 0.001,
      megawatts: 1e-6,
      horsepower: 0.0013410889041094,
    },
    kilowatts: {
      watts: 1000,
      kilowatts: 1,
      megawatts: 0.001,
      horsepower: 1.3410889041094,
    },
    megawatts: {
      watts: 1000000,
      kilowatts: 1000,
      megawatts: 1,
      horsepower: 1341.0889041094,
    },
    horsepower: {
      watts: 745.66272,
      kilowatts: 0.74566272,
      megawatts: 0.00074566272,
      horsepower: 1,
    },
  },
  Speed: {
    "meters per second": {
      "meters per second": 1,
      "kilometers per hour": 3.6,
      "miles per hour": 2.2369362920544,
      "feet per second": 3.28084,
      knots: 1.9438444924574,
    },
    "kilometers per hour": {
      "meters per second": 0.27777777777778,
      "kilometers per hour": 1,
      "miles per hour": 0.62137119223733,
      "feet per second": 0.91134444444444,
      knots: 0.53995680346039,
    },
    "miles per hour": {
      "meters per second": 0.44704,
      "kilometers per hour": 1.609344,
      "miles per hour": 1,
      "feet per second": 1.4666667136,
      knots: 0.86897624190816,
    },
    "feet per second": {
      "meters per second": 0.3047999902464,
      "kilometers per hour": 1.097279964887,
      "miles per hour": 0.68181816,
      "feet per second": 1,
      knots: 0.59248378234153,
    },
    knots: {
      "meters per second": 0.51444444444,
      "kilometers per hour": 1.1507794480136,
      "miles per hour": 1.1507794480136,
      "feet per second": 1.6878099110965,
      knots: 1,
    },
  },
  "Data Transfer Rate": {
    "bits per second": {
      "bits per second": 1,
      "bytes per second": 0.125,
      "kilobits per second": 0.001,
      "kilobytes per second": 0.000125,
      "megabits per second": 1e-6,
      "megabytes per second": 1.25e-7,
      "gigabits per second": 1e-9,
      "gigabytes per second": 1.25e-10,
      "terabits per second": 1e-12,
      "terabytes per second": 1.25e-13,
      "petabits per second": 1e-15,
      "petabytes per second": 1.25e-16,
      "exabits per second": 1e-18,
      "exabytes per second": 1.25e-19,
    },
    "bytes per second": {
      "bits per second": 8,
      "bytes per second": 1,
      "kilobits per second": 0.008,
      "kilobytes per second": 0.001,
      "megabits per second": 8e-6,
      "megabytes per second": 1e-6,
      "gigabits per second": 8e-9,
      "gigabytes per second": 1e-9,
      "terabits per second": 8e-12,
      "terabytes per second": 1e-12,
      "petabits per second": 8e-15,
      "petabytes per second": 1e-15,
      "exabits per second": 8e-18,
      "exabytes per second": 1e-18,
    },
    "kilobits per second": {
      "bits per second": 1000,
      "bytes per second": 125,
      "kilobits per second": 1,
      "kilobytes per second": 0.125,
      "megabits per second": 0.001,
      "megabytes per second": 0.000125,
      "gigabits per second": 1e-6,
      "gigabytes per second": 1.25e-7,
      "terabits per second": 1e-9,
      "terabytes per second": 1.25e-10,
      "petabits per second": 1e-12,
      "petabytes per second": 1.25e-13,
      "exabits per second": 1e-15,
      "exabytes per second": 1.25e-16,
    },
    "kilobytes per second": {
      "bits per second": 8000,
      "bytes per second": 1000,
      "kilobits per second": 8,
      "kilobytes per second": 1,
      "megabits per second": 8e-3,
      "megabytes per second": 1e-3,
      "gigabits per second": 8e-6,
      "gigabytes per second": 1e-6,
      "terabits per second": 8e-9,
      "terabytes per second": 1e-9,
      "petabits per second": 8e-12,
      "petabytes per second": 1e-12,
      "exabits per second": 8e-15,
      "exabytes per second": 1e-15,
    },
    "megabits per second": {
      "bits per second": 1e6,
      "bytes per second": 125000,
      "kilobits per second": 1000,
      "kilobytes per second": 125,
      "megabits per second": 1,
      "megabytes per second": 0.125,
      "gigabits per second": 1e-3,
      "gigabytes per second": 1.25e-4,
      "terabits per second": 1e-6,
      "terabytes per second": 1.25e-7,
      "petabits per second": 1e-9,
      "petabytes per second": 1.25e-10,
      "exabits per second": 1e-12,
      "exabytes per second": 1.25e-13,
    },
    megabytes: {
      "bits per second": 8e6,
      "bytes per second": 1e6,
      "kilobits per second": 8000,
      "kilobytes per second": 1000,
      "megabits per second": 8,
      "megabytes per second": 1,
      "gigabits per second": 8e-3,
      "gigabytes per second": 1e-3,
      "terabits per second": 8e-6,
      "terabytes per second": 1e-6,
      "petabits per second": 8e-9,
      "petabytes per second": 1e-9,
      "exabits per second": 8e-12,
      "exabytes per second": 1e-12,
    },
    "gigabits per second": {
      "bits per second": 1e9,
      "bytes per second": 1.25e8,
      "kilobits per second": 1e6,
      "kilobytes per second": 125000,
      "megabits per second": 1000,
      "megabytes per second": 125,
      "gigabits per second": 1,
      "gigabytes per second": 0.125,
      "terabits per second": 1e-3,
      "terabytes per second": 1.25e-4,
      "petabits per second": 1e-6,
      "petabytes per second": 1.25e-7,
      "exabits per second": 1e-9,
      "exabytes per second": 1.25e-10,
    },
    "gigabytes per second": {
      "bits per second": 8e9,
      "bytes per second": 1e9,
      "kilobits per second": 8e6,
      "kilobytes per second": 1e6,
      "megabits per second": 8000,
      "megabytes per second": 1000,
      "gigabits per second": 8,
      "gigabytes per second": 1,
      "terabits per second": 8e-3,
      "terabytes per second": 1e-3,
      "petabits per second": 8e-6,
      "petabytes per second": 1e-6,
      "exabits per second": 8e-9,
      "exabytes per second": 1e-9,
    },
    "terabits per second": {
      "bits per second": 1e12,
      "bytes per second": 1.25e11,
      "kilobits per second": 1e9,
      "kilobytes per second": 1.25e8,
      "megabits per second": 1e6,
      "megabytes per second": 125000,
      "gigabits per second": 1000,
      "gigabytes per second": 125,
      "terabits per second": 1,
      "terabytes per second": 0.125,
      "petabits per second": 1e-3,
      "petabytes per second": 1.25e-4,
      "exabits per second": 1e-6,
      "exabytes per second": 1.25e-7,
    },
    "terabytes per second": {
      "bits per second": 8e12,
      "bytes per second": 1e12,
      "kilobits per second": 8e9,
      "kilobytes per second": 1e9,
      "megabits per second": 8e6,
      "megabytes per second": 1e6,
      "gigabits per second": 8000,
      "gigabytes per second": 1000,
      "terabits per second": 8,
      "terabytes per second": 1,
      "petabits per second": 8e-3,
      "petabytes per second": 1e-3,
      "exabits per second": 8e-6,
      "exabytes per second": 1e-6,
    },
    "petabits per second": {
      "bits per second": 1e15,
      "bytes per second": 1.25e14,
      "kilobits per second": 1e12,
      "kilobytes per second": 1.25e11,
      "megabits per second": 1e9,
      "megabytes per second": 1.25e8,
      "gigabits per second": 1e6,
      "gigabytes per second": 125000,
      "terabits per second": 1000,
      "terabytes per second": 125,
      "petabits per second": 1,
      "petabytes per second": 0.125,
      "exabits per second": 1e-3,
      "exabytes per second": 1.25e-4,
    },
    "petabytes per second": {
      "bits per second": 8e15,
      "bytes per second": 1e15,
      "kilobits per second": 8e12,
      "kilobytes per second": 1e12,
      "megabits per second": 8e9,
      "megabytes per second": 1e9,
      "gigabits per second": 8e6,
      "gigabytes per second": 1e6,
      "terabits per second": 8000,
      "terabytes per second": 1000,
      "petabits per second": 8,
      "petabytes per second": 1,
      "exabits per second": 8e-3,
      "exabytes per second": 1e-3,
    },
    "exabits per second": {
      "bits per second": 1e18,
      "bytes per second": 1.25e17,
      "kilobits per second": 1e15,
      "kilobytes per second": 1.25e14,
      "megabits per second": 1e12,
      "megabytes per second": 1.25e11,
      "gigabits per second": 1e9,
      "gigabytes per second": 1.25e8,
      "terabits per second": 1e6,
      "terabytes per second": 125000,
      "petabits per second": 1000,
      "petabytes per second": 125,
      "exabits per second": 1,
      "exabytes per second": 0.125,
    },
    "exabytes per second": {
      "bits per second": 8e18,
      "bytes per second": 1e18,
      "kilobits per second": 8e15,
      "kilobytes per second": 1e15,
      "megabits per second": 8e12,
      "megabytes per second": 1e12,
      "gigabits per second": 8e9,
      "gigabytes per second": 1e9,
      "terabits per second": 8e6,
      "terabytes per second": 1e6,
      "petabits per second": 8000,
      "petabytes per second": 1000,
      "exabits per second": 8,
      "exabytes per second": 1,
    },
  },
  "Digital Storage": {
    bits: {
      bits: 1,
      bytes: 0.125,
      kilobits: 0.001,
      kilobytes: 0.000125,
      megabits: 1e-6,
      megabytes: 1.25e-7,
      gigabits: 1e-9,
      gigabytes: 1.25e-10,
      terabits: 1e-12,
      terabytes: 1.25e-13,
      petabits: 1e-15,
      petabytes: 1.25e-16,
      exabits: 1e-18,
      exabytes: 1.25e-19,
    },
    bytes: {
      bits: 8,
      bytes: 1,
      kilobits: 0.008,
      kilobytes: 0.001,
      megabits: 8e-6,
      megabytes: 1e-6,
      gigabits: 8e-9,
      gigabytes: 1e-9,
      terabits: 8e-12,
      terabytes: 1e-12,
      petabits: 8e-15,
      petabytes: 1e-15,
      exabits: 8e-18,
      exabytes: 1e-18,
    },
    kilobits: {
      bits: 1000,
      bytes: 125,
      kilobits: 1,
      kilobytes: 0.125,
      megabits: 0.001,
      megabytes: 0.000125,
      gigabits: 1e-6,
      gigabytes: 1.25e-7,
      terabits: 1e-9,
      terabytes: 1.25e-10,
      petabits: 1e-12,
      petabytes: 1.25e-13,
      exabits: 1e-15,
      exabytes: 1.25e-16,
    },
    kilobytes: {
      bits: 8000,
      bytes: 1000,
      kilobits: 8,
      kilobytes: 1,
      megabits: 8e-3,
      megabytes: 1e-3,
      gigabits: 8e-6,
      gigabytes: 1e-6,
      terabits: 8e-9,
      terabytes: 1e-9,
      petabits: 8e-12,
      petabytes: 1e-12,
      exabits: 8e-15,
      exabytes: 1e-15,
    },
    megabits: {
      bits: 1e6,
      bytes: 125000,
      kilobits: 1000,
      kilobytes: 125,
      megabits: 1,
      megabytes: 0.125,
      gigabits: 1e-3,
      gigabytes: 1.25e-4,
      terabits: 1e-6,
      terabytes: 1.25e-7,
      petabits: 1e-9,
      petabytes: 1.25e-10,
      exabits: 1e-12,
      exabytes: 1.25e-13,
    },
    megabytes: {
      bits: 8e6,
      bytes: 1e6,
      kilobits: 8000,
      kilobytes: 1000,
      megabits: 8,
      megabytes: 1,
      gigabits: 8e-3,
      gigabytes: 1e-3,
      terabits: 8e-6,
      terabytes: 1e-6,
      petabits: 8e-9,
      petabytes: 1e-9,
      exabits: 8e-12,
      exabytes: 1e-12,
    },
    gigabits: {
      bits: 1e9,
      bytes: 1.25e8,
      kilobits: 1e6,
      kilobytes: 125000,
      megabits: 1000,
      megabytes: 125,
      gigabits: 1,
      gigabytes: 0.125,
      terabits: 1e-3,
      terabytes: 1.25e-4,
      petabits: 1e-6,
      petabytes: 1.25e-7,
      exabits: 1e-9,
      exabytes: 1.25e-10,
    },
    gigabytes: {
      bits: 8e9,
      bytes: 1e9,
      kilobits: 8e6,
      kilobytes: 1e6,
      megabits: 8000,
      megabytes: 1000,
      gigabits: 8,
      gigabytes: 1,
      terabits: 8e-3,
      terabytes: 1e-3,
      petabits: 8e-6,
      petabytes: 1e-6,
      exabits: 8e-9,
      exabytes: 1e-9,
    },
    terabits: {
      bits: 1e12,
      bytes: 1.25e11,
      kilobits: 1e9,
      kilobytes: 1.25e8,
      megabits: 1e6,
      megabytes: 125000,
      gigabits: 1000,
      gigabytes: 125,
      terabits: 1,
      terabytes: 0.125,
      petabits: 1e-3,
      petabytes: 1.25e-4,
      exabits: 1e-6,
      exabytes: 1.25e-7,
    },
    terabytes: {
      bits: 8e12,
      bytes: 1e12,
      kilobits: 8e9,
      kilobytes: 1e9,
      megabits: 8e6,
      megabytes: 1e6,
      gigabits: 8000,
      gigabytes: 1000,
      terabits: 8,
      terabytes: 1,
      petabits: 8e-3,
      petabytes: 1e-3,
      exabits: 8e-6,
      exabytes: 1e-6,
    },
    petabits: {
      bits: 1e15,
      bytes: 1.25e14,
      kilobits: 1e12,
      kilobytes: 1.25e11,
      megabits: 1e9,
      megabytes: 1.25e8,
      gigabits: 1e6,
      gigabytes: 125000,
      terabits: 1000,
      terabytes: 125,
      petabits: 1,
      petabytes: 0.125,
      exabits: 1e-3,
      exabytes: 1.25e-4,
    },
    petabytes: {
      bits: 8e15,
      bytes: 1e15,
      kilobits: 8e12,
      kilobytes: 1e12,
      megabits: 8e9,
      megabytes: 1e9,
      gigabits: 8e6,
      gigabytes: 1e6,
      terabits: 8000,
      terabytes: 1000,
      petabits: 8,
      petabytes: 1,
      exabits: 8e-3,
      exabytes: 1e-3,
    },
    exabits: {
      bits: 1e18,
      bytes: 1.25e17,
      kilobits: 1e15,
      kilobytes: 1.25e14,
      megabits: 1e12,
      megabytes: 1.25e11,
      gigabits: 1e9,
      gigabytes: 1.25e8,
      terabits: 1e6,
      terabytes: 125000,
      petabits: 1000,
      petabytes: 125,
      exabits: 1,
      exabytes: 0.125,
    },
    exabytes: {
      bits: 8e18,
      bytes: 1e18,
      kilobits: 8e15,
      kilobytes: 1e15,
      megabits: 8e12,
      megabytes: 1e12,
      gigabits: 8e9,
      gigabytes: 1e9,
      terabits: 8e6,
      terabytes: 1e6,
      petabits: 8000,
      petabytes: 1000,
      exabits: 8,
      exabytes: 1,
    },
  },
  Pressure: {
    pascal: {
      pascal: 1,
      bar: 1e-5,
      torr: 0.0075006375541921,
      atmospheres: 9.8692326671601E-6,
      "pounds per square inch": 0.00014503773773022,
    },
    bar: {
      pascal: 100000,
      bar: 1,
      torr: 750.06375541921,
      atmospheres: 0.98692326671601,
      "pounds per square inch": 14.503773773022,
    },
    torr: {
      pascal: 133.322,
      bar: 0.00133322,
      torr: 1,
      atmospheres: 0.0013157858376511,
      "pounds per square inch": 0.019336721269668,
    },
    atmospheres: {
      pascal: 101325,
      bar: 1.01325,
      torr: 760.00210017852,
      atmospheres: 1,
      "pounds per square inch": 14.695948775514,
    },
    "pounds per square inch": {
      pascal: 6894.757293168,
      bar: 0.06894757293168,
      torr: 51.715075480176,
      atmospheres: 0.068045963909874,
      "pounds per square inch": 1,
    },
  },
};

export {
  conversions
};

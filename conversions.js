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
			inch: 3.937e-11,
			foot: 3.2808e-12,
			yard: 1.0936e-12,
			mile: 6.2137e-16,
			"nautical mile": 5.3996e-16,
			"astronomical unit": 6.68459e-24,
			"light year": 1.057e-28,
			parsec: 3.24078e-29,
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
			inch: 3.937e-8,
			foot: 3.2808e-9,
			yard: 1.0936e-9,
			mile: 6.2137e-13,
			"nautical mile": 5.3996e-13,
			"astronomical unit": 6.68459e-21,
			"light year": 1.057e-25,
			parsec: 3.24078e-26,
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
			inch: 3.937e-5,
			foot: 3.2808e-6,
			yard: 1.0936e-6,
			mile: 6.2137e-10,
			"nautical mile": 5.3996e-10,
			"astronomical unit": 6.68459e-18,
			"light year": 1.057e-22,
			parsec: 3.24078e-23,
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
			inch: 0.0393701,
			foot: 3.2808e-3,
			yard: 1.0936e-3,
			mile: 6.2137e-7,
			"nautical mile": 5.3996e-7,
			"astronomical unit": 6.68459e-15,
			"light year": 1.057e-19,
			parsec: 3.24078e-20,
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
			inch: 0.393701,
			foot: 3.2808e-2,
			yard: 1.0936e-2,
			mile: 6.2137e-6,
			"nautical mile": 5.3996e-6,
			"astronomical unit": 6.68459e-14,
			"light year": 1.057e-18,
			parsec: 3.24078e-19,
			angstrom: 1e8,
		},
		meter: {
			picometer: 1e12,
			nanometer: 1e9,
			micrometer: 1000000,
			millimeter: 1000,
			centimeter: 100,
			meter: 1,
			kilometer: 1e-3,
			inch: 39.3701,
			foot: 3.28084,
			yard: 1.09361,
			mile: 6.2137e-4,
			"nautical mile": 5.3996e-4,
			"astronomical unit": 6.68459e-12,
			"light year": 1.057e-16,
			parsec: 3.24078e-17,
			angstrom: 1e10,
		},
		kilometer: {
			picometer: 1e15,
			nanometer: 1e12,
			micrometer: 1e9,
			millimeter: 1000000,
			centimeter: 100000,
			meter: 1000,
			kilometer: 1,
			inch: 39370.1,
			foot: 3280.84,
			yard: 1093.61,
			mile: 0.62137,
			"nautical mile": 0.53996,
			"astronomical unit": 6.68459e-9,
			"light year": 1.057e-13,
			parsec: 3.24078e-14,
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
			foot: 0.0833333,
			yard: 0.0277778,
			mile: 1.5783e-5,
			"nautical mile": 1.3715e-5,
			"astronomical unit": 1.69789e-13,
			"light year": 2.68478e-18,
			parsec: 8.2316e-19,
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
			yard: 0.333333,
			mile: 0.000189394,
			"nautical mile": 0.000164579,
			"astronomical unit": 2.0375e-12,
			"light year": 3.2217e-17,
			parsec: 9.8779e-18,
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
			mile: 0.000568182,
			"nautical mile": 0.000493737,
			"astronomical unit": 6.1124e-12,
			"light year": 9.6652e-17,
			parsec: 2.9634e-17,
			angstrom: 9.144e9,
		},
		mile: {
			picometer: 1.609e15,
			nanometer: 1.609e12,
			micrometer: 1.609e9,
			millimeter: 1.609e6,
			centimeter: 160934,
			meter: 1609.34,
			kilometer: 1.60934,
			inch: 63360,
			foot: 5280,
			yard: 1760,
			mile: 1,
			"nautical mile": 0.868976,
			"astronomical unit": 1.0758e-8,
			"light year": 1.7011e-13,
			parsec: 5.2155e-14,
			angstrom: 1.609e13,
		},
		"nautical mile": {
			picometer: 1.852e15,
			nanometer: 1.852e12,
			micrometer: 1.852e9,
			millimeter: 1.852e6,
			centimeter: 185200,
			meter: 1852,
			kilometer: 1.852,
			inch: 72913.4,
			foot: 6076.12,
			yard: 2025.37,
			mile: 1.15078,
			"nautical mile": 1,
			"astronomical unit": 1.238e-8,
			"light year": 1.9576e-13,
			parsec: 6.0019e-14,
			angstrom: 1.852e13,
		},
		"astronomical unit": {
			picometer: 1.496e23,
			nanometer: 1.496e20,
			micrometer: 1.496e17,
			millimeter: 1.496e14,
			centimeter: 1.496e13,
			meter: 1.496e11,
			kilometer: 1.496e8,
			inch: 5.89e12,
			foot: 4.908e11,
			yard: 1.636e11,
			mile: 9.296e7,
			"nautical mile": 8.078e7,
			"astronomical unit": 1,
			"light year": 1.58125e-5,
			parsec: 4.84814e-6,
			angstrom: 1.496e21,
		},
		"light year": {
			picometer: 9.461e27,
			nanometer: 9.461e24,
			micrometer: 9.461e21,
			millimeter: 9.461e18,
			centimeter: 9.461e17,
			meter: 9.461e15,
			kilometer: 9.461e12,
			inch: 3.725e17,
			foot: 3.104e16,
			yard: 1.035e16,
			mile: 5.879e12,
			"nautical mile": 5.108e12,
			"astronomical unit": 63241.1,
			"light year": 1,
			parsec: 0.306601,
			angstrom: 9.461e25,
		},
		parsec: {
			picometer: 3.086e28,
			nanometer: 3.086e25,
			micrometer: 3.086e22,
			millimeter: 3.086e19,
			centimeter: 3.086e18,
			meter: 3.086e16,
			kilometer: 3.086e13,
			inch: 1.215e18,
			foot: 1.012e17,
			yard: 3.375e16,
			mile: 1.917e13,
			"nautical mile": 1.666e13,
			"astronomical unit": 206265,
			"light year": 3.26156,
			parsec: 1,
			angstrom: 3.086e26,
		},
		angstrom: {
			picometer: 100,
			nanometer: 0.1,
			micrometer: 1e-4,
			millimeter: 1e-7,
			centimeter: 1e-8,
			meter: 1e-10,
			kilometer: 1e-13,
			inch: 3.937e-9,
			foot: 3.2808e-10,
			yard: 1.0936e-10,
			mile: 6.2137e-14,
			"nautical mile": 5.3996e-14,
			"astronomical unit": 6.68459e-22,
			"light year": 1.057e-26,
			parsec: 3.24078e-27,
			angstrom: 1,
		},
	},
	Area: {
		"square millimeters": {
			"square millimeters": 1,
			"square centimeters": 0.01,
			"square meters": 1e-6,
			"square kilometers": 1e-12,
			"square inches": 0.00155,
			"square feet": 1.0764e-5,
			"square yards": 1.196e-6,
			"square miles": 3.861e-13,
			acres: 2.4711e-10,
			hectares: 1e-10,
		},
		"square centimeters": {
			"square millimeters": 100,
			"square centimeters": 1,
			"square meters": 1e-4,
			"square kilometers": 1e-10,
			"square inches": 0.155,
			"square feet": 0.00107639,
			"square yards": 0.000119599,
			"square miles": 3.861e-11,
			acres: 2.4711e-8,
			hectares: 1e-8,
		},
		"square meters": {
			"square millimeters": 1e6,
			"square centimeters": 10000,
			"square meters": 1,
			"square kilometers": 1e-6,
			"square inches": 1550,
			"square feet": 10.7639,
			"square yards": 1.19599,
			"square miles": 3.861e-7,
			acres: 0.000247105,
			hectares: 1e-4,
		},
		"square kilometers": {
			"square millimeters": 1e12,
			"square centimeters": 1e10,
			"square meters": 1e6,
			"square kilometers": 1,
			"square inches": 1.55e9,
			"square feet": 1.076e7,
			"square yards": 1.196e6,
			"square miles": 0.386102,
			acres: 247.105,
			hectares: 100,
		},
		"square inches": {
			"square millimeters": 645.16,
			"square centimeters": 6.4516,
			"square meters": 0.00064516,
			"square kilometers": 6.4516e-10,
			"square inches": 1,
			"square feet": 0.00694444,
			"square yards": 0.000771605,
			"square miles": 2.491e-10,
			acres: 1.5942e-7,
			hectares: 6.4516e-8,
		},
		"square feet": {
			"square millimeters": 92903,
			"square centimeters": 929.03,
			"square meters": 0.092903,
			"square kilometers": 9.2903e-8,
			"square inches": 144,
			"square feet": 1,
			"square yards": 0.111111,
			"square miles": 3.587e-8,
			acres: 2.2957e-5,
			hectares: 9.2903e-6,
		},
		"square yards": {
			"square millimeters": 836127,
			"square centimeters": 8361.27,
			"square meters": 0.836127,
			"square kilometers": 8.3613e-7,
			"square inches": 1296,
			"square feet": 9,
			"square yards": 1,
			"square miles": 3.2283e-7,
			acres: 0.000206612,
			hectares: 8.3613e-5,
		},
		"square miles": {
			"square millimeters": 2.59e12,
			"square centimeters": 2.59e10,
			"square meters": 2.59e6,
			"square kilometers": 2.58999,
			"square inches": 4.014e9,
			"square feet": 2.788e7,
			"square yards": 3.098e6,
			"square miles": 1,
			acres: 640,
			hectares: 258.999,
		},
		acres: {
			"square millimeters": 4.047e9,
			"square centimeters": 4.047e7,
			"square meters": 4046.86,
			"square kilometers": 0.00404686,
			"square inches": 6.273e6,
			"square feet": 43560,
			"square yards": 4840,
			"square miles": 0.0015625,
			acres: 1,
			hectares: 0.404686,
		},
		hectares: {
			"square millimeters": 1e10,
			"square centimeters": 1e8,
			"square meters": 10000,
			"square kilometers": 0.01,
			"square inches": 1.55e7,
			"square feet": 107639,
			"square yards": 11959.9,
			"square miles": 0.00386102,
			acres: 2.47105,
			hectares: 1,
		},
	},
	Volume: {
		cc: {
			cc: 1,
			milliliter: 1,
			liter: 0.001,
			"cubic meter": 1e-6,
			"fluid ounce": 0.033814,
			cup: 0.00416667,
			pint: 0.00211338,
			quart: 0.00105669,
			gallon: 0.000264172,
			"cubic inch": 0.0610237,
			"cubic feet": 3.5315e-5,
			teaspoon: 0.202884,
			tablespoon: 0.067628,
		},
		milliliter: {
			cc: 1,
			milliliter: 1,
			liter: 0.001,
			"cubic meter": 1e-6,
			"fluid ounce": 0.033814,
			cup: 0.00416667,
			pint: 0.00211338,
			quart: 0.00105669,
			gallon: 0.000264172,
			"cubic inch": 0.0610237,
			"cubic feet": 3.5315e-5,
			teaspoon: 0.202884,
			tablespoon: 0.067628,
		},
		liter: {
			cc: 1000,
			milliliter: 1000,
			liter: 1,
			"cubic meter": 0.001,
			"fluid ounce": 33.814,
			cup: 4.16667,
			pint: 2.11338,
			quart: 1.05669,
			gallon: 0.264172,
			"cubic inch": 61.0237,
			"cubic feet": 0.0353147,
			teaspoon: 202.884,
			tablespoon: 67.628,
		},
		"cubic meter": {
			cc: 1e6,
			milliliter: 1e6,
			liter: 1000,
			"cubic meter": 1,
			"fluid ounce": 33814,
			cup: 4166.67,
			pint: 2113.38,
			quart: 1056.69,
			gallon: 264.172,
			"cubic inch": 61023.7,
			"cubic feet": 35.3147,
			teaspoon: 202884,
			tablespoon: 67628,
		},
		"fluid ounce": {
			cc: 29.5735,
			milliliter: 29.5735,
			liter: 0.0295735,
			"cubic meter": 2.9574e-5,
			"fluid ounce": 1,
			cup: 0.123223,
			pint: 0.0625,
			quart: 0.03125,
			gallon: 0.0078125,
			"cubic inch": 1.80469,
			"cubic feet": 0.00104438,
			teaspoon: 6,
			tablespoon: 2,
		},
		cup: {
			cc: 240,
			milliliter: 240,
			liter: 0.24,
			"cubic meter": 0.00024,
			"fluid ounce": 8.11537,
			cup: 1,
			pint: 0.50721,
			quart: 0.253605,
			gallon: 0.0634013,
			"cubic inch": 14.6457,
			"cubic feet": 0.00847552,
			teaspoon: 48.6922,
			tablespoon: 16.2307,
		},
		pint: {
			cc: 473.176,
			milliliter: 473.176,
			liter: 0.473176,
			"cubic meter": 0.000473176,
			"fluid ounce": 16,
			cup: 1.97157,
			pint: 1,
			quart: 0.5,
			gallon: 0.125,
			"cubic inch": 28.875,
			"cubic feet": 0.0167101,
			teaspoon: 96,
			tablespoon: 32,
		},
		quart: {
			cc: 946.353,
			milliliter: 946.353,
			liter: 0.946353,
			"cubic meter": 0.000946353,
			"fluid ounce": 32,
			cup: 3.94314,
			pint: 2,
			quart: 1,
			gallon: 0.25,
			"cubic inch": 57.75,
			"cubic feet": 0.0334201,
			teaspoon: 192,
			tablespoon: 64,
		},
		gallon: {
			cc: 3785.41,
			milliliter: 3785.41,
			liter: 3.78541,
			"cubic meter": 0.00378541,
			"fluid ounce": 128,
			cup: 15.7725,
			pint: 8,
			quart: 4,
			gallon: 1,
			"cubic inch": 231,
			"cubic feet": 0.133681,
			teaspoon: 768,
			tablespoon: 256,
		},
		"cubic inch": {
			cc: 16.3871,
			milliliter: 16.3871,
			liter: 0.0163871,
			"cubic meter": 1.6387e-5,
			"fluid ounce": 0.554113,
			cup: 0.0682794,
			pint: 0.034632,
			quart: 0.017316,
			gallon: 0.004329,
			"cubic inch": 1,
			"cubic feet": 0.000578704,
			teaspoon: 3.32468,
			tablespoon: 1.10823,
		},
		"cubic feet": {
			cc: 28316.8,
			milliliter: 28316.8,
			liter: 28.3168,
			"cubic meter": 0.0283168,
			"fluid ounce": 957.506,
			cup: 117.987,
			pint: 59.8442,
			quart: 29.9221,
			gallon: 7.48052,
			"cubic inch": 1728,
			"cubic feet": 1,
			teaspoon: 5745.04,
			tablespoon: 1915.01,
		},
		teaspoon: {
			cc: 4.92892,
			milliliter: 4.92892,
			liter: 0.00492892,
			"cubic meter": 4.9289e-6,
			"fluid ounce": 0.166667,
			cup: 0.0205372,
			pint: 0.0104167,
			quart: 0.00520833,
			gallon: 0.00130208,
			"cubic inch": 0.300781,
			"cubic feet": 0.000174063,
			teaspoon: 1,
			tablespoon: 0.333333,
		},
		tablespoon: {
			cc: 14.7868,
			milliliter: 14.7868,
			liter: 0.0147868,
			"cubic meter": 1.4787e-5,
			"fluid ounce": 0.5,
			cup: 0.0616115,
			pint: 0.03125,
			quart: 0.015625,
			gallon: 0.00390625,
			"cubic inch": 0.902344,
			"cubic feet": 0.00052219,
			teaspoon: 3,
			tablespoon: 1,
		},
	},
	Weight: {
		ounce: {
			ounce: 1,
			pound: 0.0625,
			ton: 3.125e-5,
			milligram: 28349.5,
			gram: 28.3495,
			kilogram: 0.0283495,
			"metric ton": 2.835e-5,
			stone: 0.00446429,
		},
		pound: {
			ounce: 16,
			pound: 1,
			ton: 0.0005,
			milligram: 453592,
			gram: 453.592,
			kilogram: 0.453592,
			"metric ton": 0.000453592,
			stone: 0.0714286,
		},
		ton: {
			ounce: 32000,
			pound: 2000,
			ton: 1,
			milligram: 9.072e8,
			gram: 907185,
			kilogram: 907.185,
			"metric ton": 0.907185,
			stone: 142.857,
		},
		milligram: {
			ounce: 3.5274e-5,
			pound: 2.2046e-6,
			ton: 1.1023e-9,
			milligram: 1,
			gram: 0.001,
			kilogram: 1e-6,
			"metric ton": 1e-9,
			stone: 1.5747e-7,
		},
		gram: {
			ounce: 0.035274,
			pound: 0.00220462,
			ton: 1.1023e-6,
			milligram: 1000,
			gram: 1,
			kilogram: 0.001,
			"metric ton": 1e-6,
			stone: 0.000157473,
		},
		kilogram: {
			ounce: 35.274,
			pound: 2.20462,
			ton: 0.00110231,
			milligram: 1e6,
			gram: 1000,
			kilogram: 1,
			"metric ton": 0.001,
			stone: 0.157473,
		},
		"metric ton": {
			ounce: 35274,
			pound: 2204.62,
			ton: 1.10231,
			milligram: 1e9,
			gram: 1e6,
			kilogram: 1000,
			"metric ton": 1,
			stone: 157.473,
		},
		stone: {
			ounce: 224,
			pound: 14,
			ton: 0.007,
			milligram: 6.35e6,
			gram: 6350.29,
			kilogram: 6.35029,
			"metric ton": 0.00635029,
			stone: 1,
		},
	},
	Time: {
		millisecond: {
			millisecond: 1,
			seconds: 0.001,
			minutes: 1.6667e-5,
			hours: 2.7778e-7,
			days: 1.1574e-8,
			weeks: 1.6534e-9,
			months: 3.8052e-10,
			years: 3.171e-11,
			decades: 3.171e-12,
			centuries: 3.171e-13,
			millennia: 3.17098e-14,
		},
		seconds: {
			millisecond: 1000,
			seconds: 1,
			minutes: 0.016667,
			hours: 0.000277778,
			days: 1.1574e-5,
			weeks: 1.6534e-6,
			months: 3.8052e-7,
			years: 3.171e-8,
			decades: 3.171e-9,
			centuries: 3.171e-10,
			millennia: 3.17098e-11,
		},
		minutes: {
			millisecond: 60000,
			seconds: 60,
			minutes: 1,
			hours: 0.0166667,
			days: 0.000694444,
			weeks: 9.9206e-5,
			months: 2.2831e-5,
			years: 1.9026e-6,
			decades: 1.9026e-7,
			centuries: 1.9026e-8,
			millennia: 1.9026e-9,
		},
		hours: {
			millisecond: 3.6e6,
			seconds: 3600,
			minutes: 60,
			hours: 1,
			days: 0.0416667,
			weeks: 0.00595238,
			months: 0.00136986,
			years: 0.000114155,
			decades: 1.1416e-5,
			centuries: 1.1416e-6,
			millennia: 1.1416e-7,
		},
		days: {
			millisecond: 8.64e7,
			seconds: 86400,
			minutes: 1440,
			hours: 24,
			days: 1,
			weeks: 0.142857,
			months: 0.0328767,
			years: 0.00273973,
			decades: 0.000273973,
			centuries: 2.7397e-5,
			millennia: 2.73973e-6,
		},
		weeks: {
			millisecond: 6.048e8,
			seconds: 604800,
			minutes: 10080,
			hours: 168,
			days: 7,
			weeks: 1,
			months: 0.230137,
			years: 0.0191781,
			decades: 0.00191781,
			centuries: 0.000191781,
			millennia: 1.9178e-5,
		},
		months: {
			millisecond: 2.628e9,
			seconds: 2.628e6,
			minutes: 43800,
			hours: 730,
			days: 30.4167,
			weeks: 4.34524,
			months: 1,
			years: 0.0833334,
			decades: 0.00833334,
			centuries: 0.000833334,
			millennia: 8.3333e-5,
		},
		years: {
			millisecond: 3.154e10,
			seconds: 3.154e7,
			minutes: 525600,
			hours: 8760,
			days: 365,
			weeks: 52.1429,
			months: 12,
			years: 1,
			decades: 0.1,
			centuries: 0.01,
			millennia: 0.001,
		},
		decades: {
			millisecond: 3.154e11,
			seconds: 3.154e8,
			minutes: 5.256e6,
			hours: 87600,
			days: 3650,
			weeks: 521.429,
			months: 120,
			years: 10,
			decades: 1,
			centuries: 0.1,
			millennia: 0.01,
		},
		centuries: {
			millisecond: 3.154e12,
			seconds: 3.154e9,
			minutes: 5.256e7,
			hours: 876000,
			days: 36500,
			weeks: 5214.29,
			months: 1200,
			years: 100,
			decades: 10,
			centuries: 1,
			millennia: 0.1,
		},
		millennia: {
			millisecond: 3.154e13,
			seconds: 3.154e10,
			minutes: 5.256e8,
			hours: 8.76e6,
			days: 365000,
			weeks: 52143,
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
			"electron volt": 6.242e18,
			calorie: 0.239,
			kilocalorie: 0.000239,
			BTU: 0.000947817,
			kWh: 2.7778e-7,
			MWh: 2.77778e-10,
			"tonnes of TNT": 2.39006e-10,
		},
		kilojoules: {
			joule: 1000,
			kilojoules: 1,
			"electron volt": 6.242e21,
			calorie: 239,
			kilocalorie: 0.239,
			BTU: 0.947817,
			kWh: 2.7778e-4,
			MWh: 2.77778e-7,
			"tonnes of TNT": 2.39006e-7,
		},
		"electron volt": {
			joule: 1.6022e-19,
			kilojoules: 1.6022e-22,
			"electron volt": 1,
			calorie: 3.8293e-20,
			kilocalorie: 3.8293e-23,
			BTU: 1.5186e-22,
			kWh: 4.4505e-26,
			MWh: 4.4505e-29,
			"tonnes of TNT": 3.8293e-29,
		},
		calorie: {
			joule: 4.184,
			kilojoules: 0.004184,
			"electron volt": 2.611e19,
			calorie: 1,
			kilocalorie: 0.001,
			BTU: 0.00396567,
			kWh: 1.1622e-6,
			MWh: 1.1622e-9,
			"tonnes of TNT": 1e-9,
		},
		kilocalorie: {
			joule: 4184,
			kilojoules: 4.184,
			"electron volt": 2.611e22,
			calorie: 1000,
			kilocalorie: 1,
			BTU: 3.96567,
			kWh: 1.1622e-3,
			MWh: 1.1622e-6,
			"tonnes of TNT": 1e-6,
		},
		BTU: {
			joule: 1055.06,
			kilojoules: 1.05506,
			"electron volt": 6.585e21,
			calorie: 252.164,
			kilocalorie: 0.252164,
			BTU: 1,
			kWh: 0.000293071,
			MWh: 0.293071,
			"tonnes of TNT": 2.5216e-7,
		},
		kWh: {
			joule: 3.6e6,
			kilojoules: 3600,
			"electron volt": 2.247e25,
			calorie: 860421,
			kilocalorie: 860.421,
			BTU: 3412.14,
			kWh: 1,
			MWh: 0.001,
			"tonnes of TNT": 0.000860421,
		},
		MWh: {
			joule: 3.6e9,
			kilojoules: 3.6e6,
			"electron volt": 2.247e28,
			calorie: 8.604e8,
			kilocalorie: 860421,
			BTU: 3.412e6,
			kWh: 1000,
			MWh: 1,
			"tonnes of TNT": 0.860421,
		},
		"tonnes of TNT": {
			joule: 4.184e9,
			kilojoules: 4.184e6,
			"electron volt": 2.611e28,
			calorie: 1e9,
			kilocalorie: 1e6,
			BTU: 3.966e6,
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
			horsepower: 0.0013404825737,
		},
		kilowatts: {
			watts: 1000,
			kilowatts: 1,
			megawatts: 0.001,
			horsepower: 1.3404825737,
		},
		megawatts: {
			watts: 1000000,
			kilowatts: 1000,
			megawatts: 1,
			horsepower: 1340.4825737,
		},
		horsepower: {
			watts: 746,
			kilowatts: 0.746,
			megawatts: 0.000746,
			horsepower: 1,
		},
	},
	Speed: {
		"meters per second": {
			"meters per second": 1,
			"kilometers per hour": 3.6,
			"miles per hour": 2.23694,
			"feet per second": 3.28084,
			knots: 1.94384,
		},
		"kilometers per hour": {
			"meters per second": 0.277778,
			"kilometers per hour": 1,
			"miles per hour": 0.621371,
			"feet per second": 0.911344,
			knots: 0.539957,
		},
		"miles per hour": {
			"meters per second": 0.44704,
			"kilometers per hour": 1.60934,
			"miles per hour": 1,
			"feet per second": 1.46667,
			knots: 0.868976,
		},
		"feet per second": {
			"meters per second": 0.3048,
			"kilometers per hour": 1.09728,
			"miles per hour": 0.681818,
			"feet per second": 1,
			knots: 0.592484,
		},
		knots: {
			"meters per second": 0.514444,
			"kilometers per hour": 1.852,
			"miles per hour": 1.15078,
			"feet per second": 1.68781,
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
	"Fuel Economy": {
		"miles per gallon": {
			"miles per gallon": 1,
			"kilometers per liter": 0.425144,
			"liters per 100km": 235.215,
		},
		"kilometers per liter": {
			"miles per gallon": 2.35215,
			"kilometers per liter": 1,
			"liters per 100km": 100,
		},
		"liters per 100km": {
			"miles per gallon": 235.215,
			"kilometers per liter": 100,
			"liters per 100km": 1,
		},
	},
	Pressure: {
		pascal: {
			pascal: 1,
			bar: 1e-5,
			torr: 0.00750062,
			atmospheres: 9.8692e-6,
			"pounds per square inch": 0.000145038,
		},
		bar: {
			pascal: 100000,
			bar: 1,
			torr: 750.062,
			atmospheres: 0.986923,
			"pounds per square inch": 14.5038,
		},
		torr: {
			pascal: 0,
			bar: 0,
			torr: 0,
			atmospheres: 0,
			"pounds per square inch": 0,
		},
		atmospheres: {
			pascal: 101325,
			bar: 1.01325,
			torr: 760,
			atmospheres: 1,
			"pounds per square inch": 14.6959,
		},
		"pounds per square inch": {
			pascal: 6894.76,
			bar: 0.0689476,
			torr: 51.7149,
			atmospheres: 0.068046,
			"pounds per square inch": 1,
		},
	},
};

export { conversions };

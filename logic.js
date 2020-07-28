import { conversions } from "./conversions.js";

const unitTypes = {
	Length: [
		"angstrom",
		"picometer",
		"nanometer",
		"micrometer",
		"millimeter",
		"centimeter",
		"meter",
		"kilometer",
		"light year",
		"inch",
		"foot",
		"yard",
		"mile",
		"nautical mile",
		"parsec",
		"astronomical unit",
	],
	Area: [
		"square millimeters",
		"square centimeters",
		"square meters",
		"square kilometers",
		"square inches",
		"square feet",
		"square yards",
		"square miles",
		"acres",
		"hectares",
	],
	Volume: [
		"cc",
		"milliliter",
		"liter",
		"cubic meter",
		"fluid ounce",
		"cup",
		"pint",
		"quart",
		"gallon",
		"cubic inch",
		"cubic feet",
		"teaspoon",
		"tablespoon",
	],
	Weight: [
		"ounce",
		"pound",
		"ton",
		"milligram",
		"gram",
		"kilogram",
		"metric ton",
		"stone",
	],
	Speed: [
		"meters per second",
		"kilometers per hour",
		"miles per hour",
		"feet per second",
		"knots",
	],
	Energy: [
		"joule",
		"kilojoules",
		"electron volt",
		"calorie",
		"kilocalorie",
		"BTU",
		"kWh",
		"MWh",
		"tonnes of TNT",
	],
	Power: ["watts", "kilowatts", "megawatts", "horsepower"],
	Time: [
		"millisecond",
		"seconds",
		"minutes",
		"hours",
		"days",
		"weeks",
		"months",
		"years",
		"decades",
		"centuries",
		"millennia",
	],
	Temperature: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
	"Data Transfer Rate": [
		"bits per second",
		"bytes per second",
		"kilobits per second",
		"kilobytes per second",
		"megabits per second",
		"megabytes per second",
		"gigabits per second",
		"gigabytes per second",
		"terabits per second",
		"terabytes per second",
		"petabits per second",
		"petabytes per second",
		"exabits per second",
		"exabytes per second",
	],
	"Digital Storage": [
		"bits",
		"bytes",
		"kilobits",
		"kilobytes",
		"megabits",
		"megabytes",
		"gigabits",
		"gigabytes",
		"terabits",
		"terabytes",
		"petabits",
		"petabytes",
		"exabits",
		"exabytes",
	],
	Pressure: ["pascal", "bar", "torr", "atmospheres", "pounds per square inch"],
	"Fuel Economy": [
		"miles per gallon",
		"kilometers per liter",
		"liters per 100km",
	],
};

function futureValueS(principal, i, n) {
	/**
	 * Returns the value of principal with a simple interest rate of i per period after n
	 * periods
	 *
	 * @param: {int} principal, the initial amount
	 * @param: {float} i, the interest rate per period
	 * @param: {int} n, the number of periods
	 */
	return principal * Math.pow(1 + i, n);
}

function futureValueC(principal, i, additions, n) {
	/**
	 * Returns the value of principal after n periods with i interest rate compounded each period,
	 * and additions added to principal each period
	 *  Additions added at the beginning of each period
	 *
	 * @param: {int} principal, the initial deposit
	 * @param: {float} i, the interest rate per period
	 * @param: {int} additions, the amount deposited each period
	 * @param: {int} n, the number of periods
	 */
	return 0;
}

function presentValue(fv, i, n, c) {
	/**
	 * Returns the present value of fv, with an interest rate of i per period over n periods,
	 * compounded c times per period
	 *
	 * @param: {int} fv, the amount received in the future
	 * @param: {float} i, the interest rate per period
	 * @param: {int} n, the number of periods
	 * @param: {int} c, the number of compounds per period, 'c' for continuously
	 */
	return 0;
}

function presentValueA(amount, i, n) {
	/**
	 * Returns the present value of an annuity, receiving amount per period with an interest rate of
	 * i per period, over n periods
	 * @param: {int} amount, the amount received each period
	 * @param: {float} i, the interest rate per period
	 * @param: {int} n, the number of periods
	 */
}

function convert(amount, unit1, unit2) {
	/**
	 * Returns the value of amount converted from unit1 to unit2
	 * I.e. convert(5, kilograms, pounds) returns 11.0231
	 *
	 * @param: {float} amount, the amount of unit1
	 * @param: {string} unit1, the unit to convert from
	 * @param: {string} unit2, the unit to convert to
	 * @see: conversions.json to find all of the compatible units
	 */
	// console.log(unit2);
	if (unitTypes.Length.includes(unit1)) {
		return amount * conversions.Length[unit1][unit2];
	} else if (unitTypes.Area.includes(unit1)) {
	} else if (unitTypes.Volume.includes(unit1)) {
	} else if (unitTypes.Weight.includes(unit1)) {
	} else if (unitTypes.Speed.includes(unit1)) {
	} else if (unitTypes.Energy.includes(unit1)) {
	} else if (unitTypes.Power.includes(unit1)) {
	} else if (unitTypes.Time.includes(unit1)) {
	} else if (unitTypes.Temperature.includes(unit1)) {
	} else if (unitTypes.DataTransferRate.includes(unit1)) {
	} else if (unitTypes.DigitalStorage.includes(unit1)) {
	} else if (unitTypes.Pressure.includes(unit1)) {
	} else if (unitTypes.FuelEconomy.includes(unit1)) {
	}
}
function convertCurrency(amount, currency1, currency2) {}
function convertFile(file, outputFormat) {}

export {
	convert,
	convertCurrency,
	convertFile,
	futureValueC,
	futureValueS,
	presentValue,
	presentValueA,
};

function futureValueS(principal, i, n) {
	/**
	 * Returns the value of principal with a simple interest rate of i per period after n
	 * periods
	 *
	 * @param: {int} principal, the initial amount
	 * @param: {float} i, the interest rate per period
	 * @param: {int} n, the number of periods
	 */
	return 0;
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
}

function convertCurrency(amount, currency1, currency2) {}
function convertFile(file, outputFormat) {}

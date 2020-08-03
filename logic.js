import {
  conversions
} from "./conversions.js";
const fetch = require("node-fetch")

export function futureValueS(principal, i, n) {
  /**Returns the value of principal with a simple interest rate of i per period after n
   periods
   @param: {int} principal, the initial amount
   @param: {float} i, the interest rate per period
   @param: {int} n, the number of periods
   */
  let result = parseFloat(principal) + principal * i * n
  return result.toFixed(2);
}

export function futureValueC(principal, i, additions, n) {
  /**Returns the value of principal after n periods with i interest rate compounded each period,
   and additions added to principal each period
   @param: {int} principal, the initial deposit
   @param: {float} i, the interest rate per period
   @param: {int} additions, the amount deposited each period
   @param: {int} n, the number of periods
   */
  let total = 0;
  if (principal) {
    total += principal * Math.pow(1 + i, n)
  }
  if (additions) {
    total += additions * (Math.pow(1 + i, n) - 1) / i
  }
  return total.toFixed(2)
}

export function presentValue(fv, i, n) {
  /**Returns the present value of fv, with an interest rate of i per period over n periods,
   compounded c times per period
   @param: {int} fv, the amount received in the future
   @param: {float} i, the interest rate per period
   @param: {int} n, the number of periods
   */
  let result = fv / Math.pow(1 + i, n);
  return result.toFixed(2);
}

export function presentValueA(amount, i, n) {
  /**Returns the present value of an annuity, receiving amount per period with an interest rate of
   i per period, over n periods
   @param: {int} amount, the amount received each period
   @param: {float} i, the interest rate per period
   @param: {int} n, the number of periods
   */
  let result = amount * ((1 - Math.pow(1 + i, -n)) / i);
  return result.toFixed(2)
}

export function convert(amount, unit1, unit2) {
  /**Returns the value of amount converted from unit1 to unit2
   I.e. convert(5, kilograms, pounds) returns 11.0231
   @param: {float} amount, the amount of unit1
   @param: {string} unit1, the unit to convert from
   @param: {string} unit2, the unit to convert to
   @see: conversions.json to find all of the compatible units
   */
  //Convert Between Standard Units i.e. 1 unit1 = x unit2
  for (let category in conversions) {
    if (unit1 in conversions[category]) {
      return amount * conversions[category][unit1][unit2];
    }
  }
  //Check Temperature Conversions (Separate Because these are formulas)
  switch (unit1) {
    case "Fahrenheit":
      switch (unit2) {
        case "Fahrenheit":
          return amount;
        case "Celsius":
          return (amount - 32.0) / 1.8;
        case "Rankine":
          return amount + 459.67;
        case "Kelvin":
          return (amount - 32.0) / 1.8 + 273.15;
        default:
          break;
      }
      break;
    case "Celsius":
      switch (unit2) {
        case "Fahrenheit":
          return amount * 1.8 + 32;
        case "Celsius":
          return amount;
        case "Rankine":
          return amount * 1.8 + 491.67;
        case "Kelvin":
          return amount + 273.15;
        default:
          break;
      }
      break;
    case "Rankine":
      switch (unit2) {
        case "Fahrenheit":
          break;
        case "Celsius":
          return (amount - 491.67) / 1.8;
        case "Rankine":
          return amount;
        case "Kelvin":
          return amount / 1.8;
        default:
          break;
      }
      break;
    case "Kelvin":
      switch (unit2) {
        case "Fahrenheit":
          return (amount - 273.15) * 1.8 + 32;
        case "Celsius":
          return amount - 273.15;
        case "Rankine":
          return amount * 1.8;
        case "Kelvin":
          return amount;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

export async function convertCurrency(amount, currency1, currency2) {
  /**Returns the value of amount converted from currency1 to currency2
    I.e. if 1 USD = 1.25 EUR then convertCurrency(5, USD, EUR) returns 6.25
    @param: {float} amount, the amount of currency1
    @param: {string} currency1, the currency to convert from
    @param: {string} currency2, the currency to convert to
   */
  let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`);
  let data = await response.json();
  let result = data["rates"][currency2] * amount
  return result.toFixed(2)
}


// export function convertFile(file, outputFormat) {}

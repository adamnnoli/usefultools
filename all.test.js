import * as logic from "./logic"

function closeEnough(num1, num2) {
  /**Returns true if num1 is within .1% of num2
   */
  return num1 >= .999 * num2 && num1 <= 1.001 * num2;
}

//Testing Conversions
test.each([
  // Length
  [5, "millimeter", 5.284853609555E-19, "light year"],
  [0.00347, "astronomical unit", 5191046112977700000, "angstrom"],
  [7.6, "mile", 12.231, "kilometer"],
  [75, "parsec", 1.2495994523488E+15, "nautical mile"],
  [3, "picometer", 3, "picometer"],
  [63.4, "yard", 57.97296, "meter"],
  [987, "nanometer", 9.87e-5, "centimeter"],
  [1342, "micrometer", 0.004402887, "foot"],
  [23, "inch", 58.42, "centimeter"],
  // Area
  [43.3, "acres", 1886148, "square feet"],
  [66.996, "hectares", 0.258673002, "square miles"],
  [37.9, "square millimeters", 0.05874512, "square inches"],
  [1.543, "square kilometers", 1845412.6414426, "square yards"],
  [0.967, "square centimeters", 9.67e-5, "square meters"],
  // Volume
  [74.3, "cc", 2.512382, "fluid ounce"],
  [77, "fluid ounce", 138.961, "cubic inch"],
  [4, "liter", 1.05669, "gallon"],
  [63, "cup", 14905.1, "milliliter"],
  [121, "cubic meter", 4273.0746733001, "cubic feet"],
  [8.347, "pint", 267.104, "tablespoon"],
  [767.325, "teaspoon", 3.996483083, "quart"],
  // Weight
  [5, "kilogram", 11.0231, "pound"],
  [59.38, "ounce", 1683.3947, "gram"],
  [37, "stone", 234.961, "kilogram"],
  [.0038725, "ton", 3513072.9057, "milligram"],
  [98.3, "metric ton", 15479.6, "stone"],
  // Speed
  [30.63, "meters per second", 68.517359, "miles per hour"],
  [1, "kilometers per hour", 0.911344, "feet per second"],
  [25, "knots", 28.7695, "miles per hour"],
  // Energy
  [46.3895, "kWh", 167002.2, "kilojoules"],
  [3.29, "MWh", 1.1226e+7, "BTU"],
  [1, "tonnes of TNT", 1e6, "kilocalorie"],
  [98.653, "calorie", 412.764152, "joule"],
  [19654873202, "electron volt", 3.149057723229e-9, "joule"],
  // Power
  [32.65, "horsepower", 24.347, "kilowatts"],
  [0.035, "megawatts", 35000, "watts"],
  // Time
  [.1066, "millennia", 1279.1986, "months"],
  [14.53, "decades", 53034.5, "days"],
  [0.0315, "centuries", 99404316.9 , "seconds"],
  [5.162, "weeks", 52032.96, "minutes"],
  [0.5, "hours", 1.8e6, "millisecond"],
  [2000, "weeks", 38.35616, "years"],
  // Temperature
  [558.27, "Rankine", 37, "Celsius"],
  [76, "Fahrenheit", 297.594, "Kelvin"],
  // Data Transfer Rate
  [17.228572, "kilobytes per second",137828.576, "bits per second"],
  [153.26379, "terabits per second",1.915797375e+13, "bytes per second"],
  [89.411, "exabits per second", 8.9411e+16,"kilobits per second"],
  [.49409525, "petabytes per second", 494095250,"megabytes per second"],
  [14.8223, "megabits per second", 0.0018527875,"gigabytes per second"],
  [486.346, "petabits per second", 0.06079325,"exabytes per second"],
  [875.1644, "kilobits per second", 1.0939555e-7,"terabytes per second"],
  [0.06867, "exabits per second", 68670000,"gigabits per second"],
  // // Digital Storage
  [1776, "kilobytes", 1.4208e7, "bits"],
  [8.17, "megabits", 1021250, "bytes"],
  [3.246, "gigabits", 3246000, "kilobits"],
  [0.0006583, "petabytes", 658300, "megabytes"],
  [12.5, "terabits", 1562.5, "gigabytes"],
  [400.5060766, "exabytes", 3204048.6128,"petabits"],
  [173.83295, "terabytes", 1.3906636e+12,"kilobits"],
  [59.81, "exabits", 59.81, "exabits"],
  // Pressure
  [0.6234, "pounds per square inch", 0.042981917, "bar"],
  [7.89, "atmospheres", 799454.25, "pascal"],
  [562.45, "torr", 10.8759689, "pounds per square inch"],
  // Fuel Economy
  [40, "miles per gallon", 5.88036, "liters per 100km"],
  [24.7, "miles per gallon", 10.50105, "kilometers per liter"],
])('%d %s = %d %s', (value, unit1, expected, unit2) => {
  expect(closeEnough((logic.convert(value, unit1, unit2)), expected)).toBe(true);
});



// test.each([
//   [1, "USD", 1.33, "CAD"],
//   // ["PLN", "KRW"],
//   // ["ILS", "AUD"],
//   // ["SGD", "MXN"],
//   // ["USD", "ZAR"],
//   // ["NZD", "NOK"],
//   // ["CNY", "TRY"],
//   // ["BGN", "MYR"],
//   // ["EUR", "CHF"],
//   // ["THB", "JPY"],
//   // ["HRK", "RUB"],
//   // ["BRL", "INR"],
//   // ["IDR", "SEK"],
//   // ["RON", "GBP"],
//   // ["CZK", "HUF"],
//   // ["DKK", "PHP"],
//   // [4.314, "ISK", "HKD"],
//   // ["CAD", "CAD"]
// ])('%d %s = %d %s', async (value, unit1, expected, unit2) => {
//   expect(await logic.convertCurrency(value, unit1, unit2)).toBeCloseTo(expected, 2);
// });

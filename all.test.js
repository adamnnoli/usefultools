import * as logic from "./logic"

//Testing Conversions
test.each([
  // Length
  [5, "millimeter", 5.285043538E-19, "light year"],
  // Area
  // Volume
  [74.3, "cc", 2.512382, "fluid ounce"],
  [77, "fluid ounce", 2.27716, "liter"],
  [4, "liter", 1.05669, "gallon"],
  // Weight
  [5, "kilogram", 11.0231, "pound"],
  [59.38, "ounce", 1683.3947, "gram"],
  [37, "stone", 234.961, "kilogram"],
  // Speed
  // Energy
  // Power
  // Time
  // Temperature
  // Data Transfer Rate
  // Digital Storage
  // Pressure
  // Fuel Economy
])('%d %s = %d %s', (value, unit1, expected, unit2) => {
  expect(logic.convert(value, unit1, unit2)).toBeCloseTo(expected, 2);
});
test("Currency Converter", async () => {
  expect(await logic.convertCurrency(1, "USD","CAD")).toBeCloseTo(1.34,2);
})

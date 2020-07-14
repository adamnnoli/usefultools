<template>
  <div id="unitConverter">
    <select id="typeSelector" v-model="currentUnitType">
      <option v-for="(type,index) in convertibleUnits " :key="index">{{ type }}</option>
    </select>
    <div id="convertSection">
      <input type="text" />
      <select v-model="unit1">
        <option v-for="(unit,index) in unitTypes[currentUnitType]" :key="index">{{ unit }}</option>
      </select>
      <Label>=</Label>
      <input type="text" />
      <select v-model="unit2">
        <option v-for="unit in unitTypes[currentUnitType]" :key="unit">{{ unit }}</option>
      </select>
    </div>
    <button>Convert</button>
  </div>
</template>

<script>
export default {
  name: "unitConverter",
  data() {
    return {
      convertibleUnits: [
        "Length",
        "Area",
        "Volume",
        "Weight",
        "Speed",
        "Energy",
        "Power",
        "Time",
        "Data Transfer Rate",
        "Digital Storage",
        "Pressure",
        "Fuel Economy"
      ],
      unitTypes: {
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
          "foott",
          "yard",
          "mile",
          "nautical mile",
          "parsec",
          "astronomical unit"
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
          "hectares"
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
          "tablespoon"
        ],
        Weight: [
          "ounce",
          "pound",
          "ton",
          "milligram",
          "gram",
          "kilogram",
          "metric ton",
          "stone"
        ],
        Speed: [
          "meters per second",
          "kilometers per hour",
          "miles per hour",
          "feet per second",
          "knots"
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
          "tonnes of TNT"
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
          "millennia"
        ],
        Temperature: ["Celsius", "Fahrenhiet", "Kelvin", "Rankine"],
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
          "exabytes per second"
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
          "exabytes"
        ],
        Pressure: [
          "pascal",
          "bar",
          "torr",
          "atmospheres",
          "pounds per square inch"
        ],
        "Fuel Economy": [
          "miles per gallon",
          "kilometers per liter",
          "liters per 100km"
        ]
      },
      currentUnitType: "Length"
    };
  }
};
</script>

<style scoped>
#unitConverter {
  background-color: #feeb6e;
}
#typeSelector {
  display: block;
  margin: auto;
  background-color: #3cceff;
  height: 50px;
  width: 150px;
}
button {
  display: block;
  margin: auto;
}
#convertSection {
  margin: auto;
}
</style>
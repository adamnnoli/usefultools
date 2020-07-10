<template>
  <div id="unitConverter">
    <h2>Unit Converter Loaded</h2>
    <select v-model="currentUnitType">
      <option v-for="(type,index) in unitTypes " :key="index">{{ type }}</option>
    </select>
    <input type="text" />
    <select v-model="unit1"></select>
    <Label>=</Label>
    <input type="text" />
    <select v-model="unit2"></select>
    <button>Convert</button>
  </div>
</template>

<script>
export default {
  name: "unitConverter",
  data() {
    return {
      unitTypes: {
        Length: [
          "angstrom",
          "um",
          "mm",
          "cm",
          "m",
          "km",
          "lightyears",
          "in",
          "feet",
          "yard",
          "mile",
          "nautical mile",
          "parsec",
          "au"
        ],
        Area: [],
        Volume: [],
        Weight: [],
        Speed: [],
        Energy: [],
        Power: [],
        Time: [],
        Temperature: []
      },
      currentUnitType: "Length"
    };
  }
};
</script>

<style scoped>
#unitConverter {
  border: dashed black;
}
</style>
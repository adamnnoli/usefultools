<template>
  <div id="tool">
    <calculator class="innerComponent" v-if="this.currComponent=='Calculator'"></calculator>
    <timeCalculator class="innerComponent" v-if="this.currComponent=='Time Calculator'"></timeCalculator>
    <interestCalculator class="innerComponent" v-if="this.currComponent=='Interest Calculator'"></interestCalculator>
    <fileConverter class="innerComponent" v-if="this.currComponent=='File Converter'"></fileConverter>
    <unitConverter class="innerComponent" v-if="this.currComponent == 'Unit Converter'"></unitConverter>
    <currencyExchanger class="innerComponent" v-if="this.currComponent=='Currency Exchanger'"></currencyExchanger>
    <hexColorPicker class="innerComponent" v-if="this.currComponent == 'Hex Color Picker'"></hexColorPicker>
    <links class="innerComponent" v-if="this.currComponent == 'Links'"></links>
  </div>
</template>
<script>
import calculator from "./tools/calculator";
import timeCalculator from "./tools/timeCalculator";
import interestCalculator from "./tools/interestCalculator";
import fileConverter from "./tools/fileConverter";
import unitConverter from "./tools/unitConverter";
import currencyExchanger from "./tools/currencyExchanger";
import hexColorPicker from "./tools/hexColorPicker";
import links from "./tools/links";

export default {
  name: "tool",
  props: ["currComponent"],
  components: {
    calculator,
    timeCalculator,
    interestCalculator,
    fileConverter,
    unitConverter,
    currencyExchanger,
    hexColorPicker,
    links
  },
  methods: {
    isCurrComponent: function(componentName) {
      this.currComponent == componentName;
    }
  }
};
</script>
<style scoped>
#tool {
  border: solid red;
}
.innerComponent {
  margin: auto;
}
</style>
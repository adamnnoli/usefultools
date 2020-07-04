<template>
  <div id="tool">
    <h2>Tool Component Working</h2>
    <timeCalculator class="innerComponent" v-if="this.currComponent=='Time Calculator'"></timeCalculator>
    <calculator class="innerComponent" v-if="this.currComponent=='Calculator'"></calculator>
    <unitConverter class="innerComponent" v-if="this.currComponent == 'Unit Converter'"></unitConverter>
    <hexColorPicker class="innerComponent" v-if="this.currComponent == 'Hex Color Picker'"></hexColorPicker>
    <links class="innerComponent" v-if="this.currComponent == 'Links'"></links>
  </div>
</template>
<script>
import calculator from "./calculator";
import timeCalculator from "./timeCalculator";
import unitConverter from "./unitConverter";
import hexColorPicker from "./hexColorPicker";
import links from "./links";

export default {
  name: "tool",
  props: ["currComponent"],
  components: {
    calculator,
    timeCalculator,
    unitConverter,
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
  height: 500px;
}
.innerComponent {
  height: 90%;
}
</style>
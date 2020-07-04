<template>
  <div id="tool">
    <h2>Tool Component Working</h2>
    <timeCalculator class="innerComponent" v-if="this.currComponent=='Time Calculator'"></timeCalculator>
    <calculator class="innerComponent" v-if="this.currComponent=='Calculator'"></calculator>
  </div>
</template>
<script>
import timeCalculator from "./timeCalculator";
import calculator from "./calculator";
export default {
  name: "tool",
  props: ["currComponent"],
  components: {
    timeCalculator,
    calculator
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
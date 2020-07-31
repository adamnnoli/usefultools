<template>
  <div id ="App">
    <usefultoolsHeader></usefultoolsHeader>
    <navbar v-on:switch-to="changeComponent($event)"></navbar>
    <tool v-bind:currComponent="currentComponent"></tool>
    <usefultoolsFooter id="footerDiv"></usefultoolsFooter>
    <testComponent></testComponent>
    </div>
</template>

<script>
import usefultoolsHeader from "./components/usefultoolsHeader";
import navbar from "./components/navbar";
import tool from "./components/tool";
import usefultoolsFooter from "./components/usefultoolsFooter";
import testComponent from "./components/testComponent"
export default {
  name: "App",
  components: {
    usefultoolsHeader,
    navbar,
    tool,
    usefultoolsFooter,
    testComponent
  },
  data: function() {
    return {
      currentComponent: "Calculator"
    };
  },
  methods: {
    changeComponent: function(newComponent) {
      this.currentComponent = newComponent;
    }
  }
};
</script>

<style>
body{
  margin:0;
}
</style>

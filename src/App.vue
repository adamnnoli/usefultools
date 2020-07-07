<template>
  <div id="app">
    <usefultoolsHeader></usefultoolsHeader>
    <div>
      <navbar v-on:switch-to="changeComponent($event)"></navbar>
    </div>
    <div>
    <tool v-bind:currComponent="currentComponent"></tool>
    </div>
    <usefultoolsFooter id="footerDiv"></usefultoolsFooter>
  </div>
</template>

<script>
import usefultoolsHeader from "./components/usefultoolsHeader.vue";
import navbar from "./components/navbar";
import tool from "./components/tool";
import usefultoolsFooter from "./components/usefultoolsFooter";
export default {
  name: "App",
  components: {
    usefultoolsHeader,
    navbar,
    tool,
    usefultoolsFooter
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

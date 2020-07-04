<template>
  <div id="app">
    <usefultoolsHeader></usefultoolsHeader>
    <navbar v-on:switch-to="changeComponent($event)"></navbar>
    <tool v-bind:currComponent = "currentComponent"></tool>
    <usefultoolsFooter></usefultoolsFooter>
  </div>
</template>

<script>
import usefultoolsHeader from "./components/usefultoolsHeader.vue";
import navbar from "./components/navbar";
import tool from "./components/tool"
import usefultoolsFooter from"./components/usefultoolsFooter";
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
      currentComponent: "calculator"
    };
  },
  methods:{
    changeComponent: function(newComponent){
      console.log("Changed components");
      this.currentComponent = newComponent;
      console.log(newComponent)
    }
  }
};
</script>

<style>
  usefultoolsHeader{
    margin:0
  }
</style>

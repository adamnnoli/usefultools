<template>
  <div id="app">
    <usefultoolsHeader></usefultoolsHeader>
    <navbar></navbar>
    <tool :currComponent = "currentComponent"></tool>
  </div>
</template>

<script>
import usefultoolsHeader from "./components/usefultoolsHeader.vue";
import navbar from "./components/navbar";
import tool from "./components/tool"

export default {
  name: "App",
  components: {
    usefultoolsHeader,
    navbar,
    tool
  },
  data: function() {
    return {
      currentComponent: "calculator"
    };
  }
};
</script>

<style>
</style>

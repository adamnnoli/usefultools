<template>
  <div id="navbar">
    <h2>Navbar Working</h2>
    <button v-on:click="switchTo('Calculator')">Calculator</button>
    <button v-on:click="switchTo('Time Calculator')">Time Calculator</button>
    <button>Converter</button>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods:{
    switchTo: function(value){
      this.$emit('switch-to',value);
      console.log("Emitted")
    }
  }
};
</script>

<style scoped>
  #navbar {
    border: solid green;
  }
</style>
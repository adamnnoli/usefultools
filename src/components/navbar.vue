<template>
  <div id="navbar">
    <button @click="switchTo('Calculator')">Calculator</button>
    <button @click="switchTo('Time Calculator')">Time Calculator</button>
    <button @click="switchTo('Unit Converter')">Unit Converter</button>
    <button @click="switchTo('Hex Color Picker')">Hex Color Picker</button>
    <button @click="switchTo('Links')">Links</button>
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
    width: 75%;
    float: right;
    border: solid green;
  }
  button{
    height:25px;
    border-radius: 5px
  }
</style>
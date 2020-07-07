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
    }
  }
};
</script>

<style scoped>
  #navbar {
    background-color: #FEE440;
    border: solid green;
  }
  button{
    height:40px;
    border-top-left-radius: 8px;
    background-color: #F15BB5;
    width:19%;
    margin:0;
    padding: 0;
  }
</style>
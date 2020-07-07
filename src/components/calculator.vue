<template>
  <div id="calculator">
    <div id="textBox">
      <textarea style="resize:none" name="calcOutput" id="calcOutput" cols="30" rows="1"></textarea>
    </div>
    <div id="textBox">
      <textarea style="resize:none" name="calcInput" id="calcInput" cols="30" rows="3"></textarea>
    </div>
    <div class="buttonRow">
      <button v-if="inDeg" @click="changeMode">Rad</button>
      <button v-if="!inDeg" @click="changeMode">Deg</button>
      <button>C</button>
      <button>Del</button>
      <Button>=</Button>
    </div>
    <div class="buttonRow">
      <button>&#8730;</button>
      <button>
        x
        <sup>y</sup>
      </button>
      <button>x!</button>
      <button>E</button>
    </div>
    <div class="buttonRow">
      <button>log</button>
      <button>ln</button>
      <button>e</button>
      <button>
        x
        <sup>-1</sup>
      </button>
    </div>
    <div class="buttonRow">
      <button>sin</button>
      <button>cos</button>
      <button>tan</button>
      <button>&Pi;</button>
    </div>
    <div class="buttonRow">
      <button>(</button>
      <button>)</button>
      <button>%</button>
      <button>+</button>
    </div>
    <div class="buttonRow">
      <button class="numButton">7</button>
      <button class="numButton">8</button>
      <button class="numButton">9</button>
      <button>-</button>
    </div>
    <div class="buttonRow">
      <button class="numButton">4</button>
      <button class="numButton">5</button>
      <button class="numButton">6</button>
      <button>*</button>
    </div>
    <div class="buttonRow">
      <button class="numButton">1</button>
      <button class="numButton">2</button>
      <button class="numButton">3</button>
      <button>/</button>
    </div>
    <div class="buttonRow">
      <button>.</button>
      <button class="numButton">0</button>
      <button>Ans</button>
      <button>(-)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      inDeg: true
    };
  },
  methods: {
    changeMode() {
      this.inDeg = !this.inDeg;
    }
  }
};
</script>

<style scoped>
#calculator {
  background-color: #feeb6e;
}
.buttonRow {
  margin: auto;
  width: 30%;
}
button {
  width: 25%;
  height: 40px;
  margin: 0;
  padding: 0;
  background-color: #f484c7;
  box-sizing: border-box;
}
.numButton {
  background-color: #ED35A4;
}
textarea {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
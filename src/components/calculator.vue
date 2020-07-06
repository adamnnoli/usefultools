<template>
  <div id="calculator">
    <textarea name="calcOutput" id="calcOutput" cols="30" rows="10"></textarea>
    <textarea style="resize:none" name="calcInput" id="calcInput" cols="30" rows="3"></textarea>
    <br />
    <button v-if="inDeg" @click="changeMode">Rad</button>
    <button v-if="!inDeg" @click="changeMode">Deg</button>
    <button>C</button>
    <button>Del</button>
    <Button>=</Button>
    <br />
    <button>&#8730;</button>
    <button>
      x
      <sup>y</sup>
    </button>
    <button>x!</button>
    <button>E</button>
    <br />
    <button>log</button>
    <button>ln</button>
    <button>e</button>
    <button>
      x
      <sup>-1</sup>
    </button>
    <br />
    <button>sin</button>
    <button>cos</button>
    <button>tan</button>
    <button>&Pi;</button>
    <br />
    <button>(</button>
    <button>)</button>
    <button>%</button>
    <button>+</button>
    <br />
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <br />
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>*</button>
    <br />
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>/</button>
    <br />
    <button>.</button>
    <button>0</button>
    <button>Ans</button>
    <button>(-)</button>
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
  border: dashed green;
}
</style>
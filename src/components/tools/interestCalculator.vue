<style scoped>
#interestCalculator {
  border: solid orangered;
}

h4 {
  display: inline;
}
</style>

<template>
<div id="interestCalculator">
  <div id="simpleInterest">
    <h2>Simple Interest Calculator</h2>
    <div class="interestSection">
      <h4>Principal Amount:</h4>
      <input v-model="sPrincipal" type="number" />
    </div>
    <div class="interestSection">
      <h4>Interest Rate per Period:</h4>
      <input v-model="sInterest" type="number" />
    </div>
    <div class="interestSection">
      <h4>Number of Periods</h4>
      <input v-model="sPeriods" type="number" />
    </div>
    <input v-model="sTotal" type="text" id="simpleOutput" readonly />
    <button @click="simpleInterestCalc">Calculate</button>
    <hr />
  </div>
  <div id="compoundInterest">
    <h2>Compound Interest Calculator</h2>
    <div class="compoundSection">
      <h4>Principal Amount</h4>
      <input v-model="cPrincipal" type="number" />
    </div>
    <div class="compoundSection">
      <h4>Addition each Period</h4>
      <input v-model="cAdditions" type="number" />
    </div>
    <div class="compoundSection">
      <h4>Number of Periods</h4>
      <input v-model="cPeriods" type="number" />
    </div>
    <div class="compoundSection">
      <h4>Interest Rate</h4>
      <input v-model="cInterest" type="number" />
    </div>
    <input v-model="cTotal" type="text" id="compoundOutput" readonly />
    <button @click="compoundInterestCalc">Calculate</button>
    <hr />
  </div>
  <div id="presentValue">
    <h2>Present Value Calculator</h2>
    <div class="presentValueSection">
      <h4>Future Value</h4>
      <input v-model="pvPrincipal" type="number" />
    </div>
    <div class="presentValueSection">
      <h4>Number of Periods</h4>
      <input v-model="pvPeriods" type="number" />
    </div>
    <div class="presentValueSection">
      <h4>Interest Rate per Period</h4>
      <input v-model="pvInterest" type="number" />
    </div>
    <input v-model="pvTotal" type="text" id="pvOutput" readonly />
    <button @click="presentValueCalc">Calculate</button>
    <hr />
  </div>
  <div id="annuity">
    <h2>Present Value of an Annuity Calculator</h2>
    <div class="annuitySection">
      <h4>Payment Amount</h4>
      <input v-model="pvAPrincipal" type="number" />
    </div>
    <div class="annuitySection">
      <h4>Interest Rate</h4>
      <input v-model="pvAInterest" type="number" />
    </div>
    <div class="annuitySection">
      <h4>Number of Periods</h4>
      <input v-model="pvAPeriods" type="number" />
    </div>
    <input v-model="pvATotal" type="text" id="pvAOutput" readonly />
    <button @click="presentValueACalc">Calculate</button>
  </div>
</div>
</template>

<script>
import {
  futureValueC,
  futureValueS,
  presentValue,
  presentValueA
}
from "../../../logic"
export default {
  name: "interestCalculator",
  data() {
    return {
      sPrincipal: null,
      sInterest: null,
      sPeriods: null,
      sTotal: null,

      cPrincipal: null,
      cInterest: null,
      cAdditions: null,
      cPeriods: null,
      cTotal: null,

      pvPrincipal: null,
      pvInterest: null,
      pvPeriods: null,
      pvTotal: null,

      pvAPrincipal: null,
      pvAInterest: null,
      pvAPeriods: null,
      pvATotal: null

    };
  },
  methods: {
    simpleInterestCalc() {
      this.sTotal = futureValueS(this.sPrincipal, this.sInterest, this.sPeriods);
    },
    compoundInterestCalc() {
      this.cTotal = futureValueC(this.cPrincipal, this.cInterest, this.cAdditions, this.cPeriods);
    },
    presentValueCalc() {
      this.pvTotal = presentValue(this.pvPrincipal, this.pvInterest, this.pvPeriods)
    },
    presentValueACalc() {
      this.pvATotal = presentValueA(this.pvAPrincipal, this.pvAInterest, this.pvAPeriods)
    }
  }
};
</script>

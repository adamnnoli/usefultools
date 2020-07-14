<template>
  <div id="interestCalculator">
    <div id="simpleInterest">
      <h2>Simple Interest Calculator</h2>
      <div class="interestSection">
        <h4>Principal Amount:</h4>
        <input type="number" id="simplePrincipal" />
      </div>
      <div class="interestSection">
        <h4>Interest Rate:</h4>
        <input type="number" id="simpleRate" />
      </div>
      <div class="interestSection">
        <h4>Period Length</h4>
        <select v-model="simpleFrequency">
          <option v-for="freq in frequencies" :key="freq">{{ freq }}</option>
        </select>
      </div>
      <div class="interestSection">
        <h4>Number of Periods</h4>
        <input type="number" id="simplePeriods" />
      </div>
      <button>Calculate</button>
      <hr>
    </div>
    <div id="compoundInterest">
      <h2>Compound Interest Calculator</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "interestCalculator",
  data() {
    return {
      frequencies: [
        "annually",
        "monthly",
        "quarterly",
        "weekly",
        "bi-monthly",
        "daily"
      ],
      simpleFrequency: "annually"
    };
  }
};
</script>
<style scoped>
#interestCalculator {
  border: solid orangered;
}
h4 {
  display: inline;
}
</style>
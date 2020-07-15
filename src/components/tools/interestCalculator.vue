<template>
  <div id="interestCalculator">
    <div id="simpleInterest">
      <h2>Simple Interest Calculator</h2>
      <div class="interestSection">
        <h4>Principal Amount:</h4>
        <input type="number" />
      </div>
      <div class="interestSection">
        <h4>Interest Rate per Period:</h4>
        <input type="number" />
      </div>
      <div class="interestSection">
        <h4>Number of Periods</h4>
        <input type="number" />
      </div>
      <button>Calculate</button>
      <hr />
    </div>
    <div id="compoundInterest">
      <h2>Compound Interest Calculator</h2>
      <div class="compoundSection">
        <h4>Principal Amount</h4>
        <input type="number" />
      </div>
      <div class="compoundSection">
        <h4>Addition each Period</h4>
        <input type="number" />
      </div>
      <div class="compoundSection">
        <h4>Number of Periods</h4>
        <input type="number" />
      </div>
      <div class="compoundSection">
        <h4>Interest Rate</h4>
        <input type="number" />
      </div>
      <hr />
    </div>
    <div id="presentValue">
      <h2>Present Value Calculator</h2>
      <div class="presentValueSection">
        <h4>Future Value</h4>
        <input type="number" />
      </div>
      <div class="presentValueSection">
        <h4>Number of Periods</h4>
        <input type="number" />
      </div>
      <div class="presentValueSection">
        <h4>Compounding Times per Period</h4>
        <input type="number" />
      </div>
      <div class="presentValueSection">
        <h4>Interest Rate per Period</h4>
        <input type="number" />
      </div>
      <hr />
    </div>
    <div id="annuity">
      <h2>Present Value of an Annuity Calculator</h2>
      <div class="annuitySection">
        <h4>Payment Amount</h4>
        <input type="number" />
      </div>
      <div class="annuitySection">
        <h4>Interest Rate</h4>
        <input type="number" />
      </div>
      <div class="annuitySection">
        <h4>Number of Periods</h4>
        <input type="number" />
      </div>
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
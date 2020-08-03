<template>
<div id="currencyExchanger">
  <h2>Currency Exchnanger Loaded</h2>
  <input v-model="amount" type="number" id="amount">
  <select v-model="currency1">
    <option v-for="(currency, index) in possibleCurrencies" :key="index">{{ currency }}</option>
  </select>
  <select v-model="currency2">
    <option v-for="(currency, index) in possibleCurrencies" :key="index">{{ currency }}</option>
  </select>
  <input v-model="convertedAmount" type="number" readonly>
  <button @click="convert">Convert</button>
</div>
</template>

<script>
import {
  convertCurrency
} from "../../../logic";
export default {
  name: "currencyExchanger",
  data() {
    return {
      possibleCurrencies: ["PLN", "KRW", "ILS", "AUD", "SGD", "MXN", "USD", "ZAR", "NZD", "NOK",
        "CNY", "TRY", "BGN", "MYR", "EUR", "CHF", "THB", "JPY", "HRK", "RUB", "BRL", "INR", "IDR",
        "SEK", "RON", "GBP", "CZK", "HUF", "DKK", "PHP", "ISK", "HKD", "CAD"
      ],
      amount: null,
      currency1: "USD",
      currency2: "USD",
      convertedAmount: null
    }
  },
  methods: {
    async convert() {
      this.convertedAmount = await convertCurrency(this.amount, this.currency1, this.currency2)
    }
  }
};
</script>
<style scoped>
#currencyExchnager {
  border: solid hotpink;
}
</style>

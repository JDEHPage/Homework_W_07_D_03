import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      baseInfo: [],
      exchangeRates: [],
      selectedCurrencyBase: null,
      selectedCurrencyExchange: null,
      amount: null,
      calculatedValue: 0,



    },
    mounted(){
      this.getForex();
    },
    methods: {
      getForex: function() {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => this.baseInfo = data)
        .then(data => this.exchangeRates = data.rates)
      },
      calculate: function() {
        this.exchangeRates.EUR = 1
        this.calculatedValue = (1/this.exchangeRates[this.selectedCurrencyBase]) * this.amount * this.exchangeRates[this.selectedCurrencyExchange]
        this.calculatedValue = Math.round (this.calculatedValue * 100)/100
      }
    }
  })
})

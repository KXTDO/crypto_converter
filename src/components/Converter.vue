<template>
  <div class="container">
    <div class="container-one">
      <input
        type="number"
        name="input-one"
        id="input-one"
        v-model="amountOne"
        @input="calculateResults()"
      />
    </div>
    <div class="container-two">
      <select
        name="first-currency"
        id="first-currency"
        @change="calculateResults()"
        v-model="currency_one"
      >
        <option value="bitcoin">BTC</option>
        <option value="ethereum">ETH</option>
        <option value="usd-coin">USD</option>
      </select>
      <button class="floating-button" @click="switchValues()">
        Поменять местами
      </button>
      <select
        id="currency-two"
        @change="calculateResults()"
        v-model="currency_two"
      >
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="usd">USD</option>
      </select>
    </div>
    <div class="container-there">
      <h2 id="baseValue">
        {{ amountOne }} {{ currency_one }} = {{ amountTwo }} {{ currency_two }}
      </h2>
    </div>
    <div class="container-four">
      <h4 id="lastlyUpdated">Lastly Updated: {{ timestamp }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [],
      currency_one: "bitcoin",
      currency_two: "usd",
      rate: "",
      timestamp: "",
      amountOne: 1,
      amountTwo: 0,
      symbol: "",
    };
  },
  methods: {
    calculateResults() {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.currency_two}&ids=${this.currency_one}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=14d`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data[0].current_price;
          if (data[0].symbol == "usdc") {
            this.symbol = "usd";
          } else {
            this.symbol = data[0].symbol;
          }
          this.timestamp = data[0].last_updated;
          this.amountTwo = this.amountOne * this.rate;
          console.log(data);
        });
    },

    switchValues() {
      if (this.currency_two == "btc") {
        this.currency_one = "bitcoin";
      } else if (this.currency_two == "eth") {
        this.currency_one = "ethereum";
      } else if (this.currency_two == "usd") {
        this.currency_one = "usd-coin";
      }
      this.currency_two = this.symbol;
      this.calculateResults();
    },
  },
  mounted() {
    this.calculateResults();
  },
};
</script>

<style scoped>
.container {
  width: 30%;
  font-size: 15px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  justify-content: space-between;
}
select {
  width: 15%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  font-family: "Montserrat", sans-serif;
}
input {
  width: 95.5%;
  padding: 11px;
  border-radius: 10px;
  outline: none;
  font-family: "Montserrat", sans-serif;
}
.container-there {
  background-color: rgba(46, 229, 157, 0.4);
  border-radius: 50px;
  padding: 5%;
  margin-top: 5%;
  margin-bottom: 20%;
}
h2 {
  display: flex;
  justify-content: center;
  color: #ffffff;
}
h4 {
  display: flex;
  justify-content: center;
  color: #2ee59d;
}
.floating-button {
  text-decoration: none;
  display: inline-block;
  width: 60%;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 5% 5%;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: black;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.floating-button:hover {
  background: #2ee59d;
  box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
  color: white;
  transform: translateY(-2px);
}
</style>

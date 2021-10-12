<template>
  <div class="container">
    <div class="pie-container">
      <pie-chart
        class="pie-chart"
        :chart-data="chartData"
        :options="chartOptions"
      ></pie-chart>
    </div>
    <div class="data-container">
      <hr />
      <div class="row">
        <h3>{{ firstRowCurrency }}</h3>
        <h3>{{ firstRowAmount }}</h3>
        <h3>{{ firstRowPrice }} $</h3>
        <div class="inpt-outpt">
          <input
            id="firstInp"
            type="numeric"
            placeholder="0"
            v-model="firstInput"
          />
          <button class="floating-button" @click="inputFirstCurrency()">
            Внести
          </button>
          <button class="floating-button" @click="outputFirstCurrency()">
            Снять
          </button>
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>{{ secondRowCurrency }}</h3>
        <h3>{{ secondRowAmount }}</h3>
        <h3>{{ secondRowPrice }} $</h3>
        <div class="inpt-outpt">
          <input
            id="secondInp"
            type="numeric"
            placeholder="0"
            v-model="secondInput"
          />
          <button class="floating-button" @click="inputSecondCurrency()">
            Внести
          </button>
          <button class="floating-button" @click="outputSecondCurrency()">
            Снять
          </button>
        </div>
      </div>
      <hr />
      <h4>Общая оценка портфеля: {{ +firstRowPrice + +secondRowPrice }} $</h4>
    </div>
  </div>
</template>

<script>
import PieChart from "../assets/PieChart";
export default {
  components: { PieChart },
  data() {
    return {
      firstData: [],
      firstInput: "",
      firstRowCurrency: "bitcoin",
      firstRowAmount: "1",
      firstRowPrice: "",
      firstRate: "",
      secondData: [],
      secondInput: "",
      secondRowCurrency: "ethereum",
      secondRowAmount: "1",
      secondRowPrice: "",
      secondRate: "",
      pieData: [1, 1],
      chartOptions: {
        hoverBorderWidth: 20,
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["bitcoin", "ethereum"],
        datasets: [
          {
            label: "Your Crypto Bag",
            backgroundColor: ["#41B883", "#E46651"],
            data: [1, 1],
          },
        ],
      },
    };
  },
  watch: {
    chartData() {
      this.$data._chart.update();
    },
  },
  methods: {
    fetchFirstResults() {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.firstRowCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=14d`
      )
        .then((res) => res.json())
        .then((firstData) => {
          this.firstData = firstData;
          this.firstRate = firstData[0].current_price;
          this.firstRowPrice = (this.firstRowAmount * this.firstRate).toFixed(
            2
          );
        });
      console.log(this.$data.chartData.datasets[0].data[0]);
    },
    fetchSecondResults() {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.secondRowCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=14d`
      )
        .then((res) => res.json())
        .then((secondData) => {
          this.secondData = secondData;
          this.secondRate = secondData[0].current_price;
          this.secondRowPrice = (
            this.secondRowAmount * this.secondRate
          ).toFixed(2);
          console.log(secondData);
        });
    },
    inputFirstCurrency() {
      this.firstRowAmount = +this.firstRowAmount + +this.firstInput;
      this.firstInput = "";
      this.$data.chartData.datasets[0].data[0] = +this.firstRowAmount;
      this.fetchFirstResults();
    },
    outputFirstCurrency() {
      this.firstRowAmount -= this.firstInput;
      this.firstInput = "";
      this.fetchFirstResults();
    },
    inputSecondCurrency() {
      this.secondRowAmount = +this.secondRowAmount + +this.secondInput;
      this.secondInput = "";
      // this.chartData.datasets.data[1] = this.secondRowAmount;
      this.fetchSecondResults();
    },
    outputSecondCurrency() {
      this.secondRowAmount -= this.secondInput;
      this.secondInput = "";
      this.fetchSecondResults();
    },
    changeArray(oldArray, [itemId, newTitle]) {
      let newArray = JSON.parse(JSON.stringify(oldArray));
      (newArray.find(({ id }) => id === itemId) || {}).title = newTitle;
      return newArray;
    },
  },
  mounted() {
    this.fetchFirstResults();
    this.fetchSecondResults();
  },
};
</script>

<style scoped>
.data-container {
  width: 100%;
  height: 100%;
  margin-top: 2%;
}
.pie-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.pie-chart {
  width: 400px;
  height: 400px;
}
.inpt-outpt {
  display: flex;
  align-items: center;
  width: 40%;
}
.row {
  margin: 0 5% 0 5%;
  display: flex;
  flex-direction: row;
}
.container {
  padding: 2%;
  font-size: 15px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(46, 229, 157, 0.4);
  border-radius: 50px;
}
h3 {
  display: flex;
  width: 20%;
  justify-content: center;
  color: #ffffff;
}
h4 {
  display: flex;
  justify-content: center;
  color: #ffffff;
}
input {
  width: 95.5%;
  padding: 11px;
  border-radius: 10px;
  outline: none;
  font-family: "Montserrat", sans-serif;
}
.floating-button {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin-left: 5%;
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

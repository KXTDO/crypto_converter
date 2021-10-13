<template>
  <div>
    <h2>Конвертер криптовалют</h2>
    <button
      type="button"
      class="floating-button"
      @click="$router.push({ name: 'wallet' })"
    >
      Кошелек
    </button>
    <div class="content">
      <div class="line-container">
        <line-chart class="line-chart" :data="lineData"></line-chart>
      </div>
      <div class="converter-container">
        <converter />
      </div>
    </div>
  </div>
</template>

<script>
import Converter from "../components/Converter.vue";
import LineChart from "../assets/LineChart";

export default {
  components: { Converter, LineChart },
  data() {
    return {
      ohlc: [],
      lineData: [
        42560.12,
        42322.15,
        41353.69,
        41537.91,
        43263.47,
        56744.81,
        56376.75,
        57606.87,
        57509.92,
        57432.42,
        56852.74,
        57512.61,
        57382.85,
        56526.06,
      ],
    };
  },
  methods: {
    graphData() {
      fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=14`
      )
        .then((res) => res.json())
        .then((ohlc) => {
          this.ohlc = ohlc;
          this.lineData = [];
          ohlc.forEach((element) => {
            this.lineData.push(element[4]);
          });
          console.log(this.lineData);
        });
    },
  },
  mounted() {
    this.graphData();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.line-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.line-chart {
  position: relative;
  width: 400px;
  height: 400px;
}
.converter-container {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
}
.floating-button {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
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

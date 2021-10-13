import { Pie } from "vue-chartjs";
export default {
  extends: Pie,
  props: ["data", "options"],
  computed: {
    chartData: function() {
      return this.data;
    },
  },
  methods: {
    renderPieChart: function() {
      this.renderChart(
        {
          labels: ["bitcoin", "ethereum"],
          datasets: [
            {
              label: "Your Crypto Bag",
              backgroundColor: ["#41B883", "#E46651"],
              data: this.chartData,
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          borderWidth: "10px",
          hoverBackgroundColor: "red",
          hoverBorderWidth: "10px",
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 30,
              fontSize: 14,
              fontColor: "#ffffff",
            },
          },
        }
      );
    },
  },
  mounted() {
    this.renderPieChart();
  },
  watch: {
    data: function() {
      this._chart.destroy();
      console.log(this.data);
      console.log(this.options);
      this.renderPieChart();
    },
  },
};

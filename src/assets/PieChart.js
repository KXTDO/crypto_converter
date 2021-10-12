import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Pie,
  mixins: [reactiveProp, mixins],
  props: ["options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
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
    });
  },
};

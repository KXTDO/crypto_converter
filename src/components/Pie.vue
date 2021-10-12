<template>
  <div class="pie-container">
    <pie-chart class="pie-chart" :data="chartData"></pie-chart>
  </div>
</template>

<script>
import PieChart from "../assets/PieChart";
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
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
</style>

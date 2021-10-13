import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["data", "options"],
  computed: {
    chartData: function() {
      return this.data;
    },
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(
        {
          labels: [
            "30.09",
            "1.10",
            "2.10",
            "3.10",
            "4.10",
            "5.10",
            "6.10",
            "7.10",
            "8.10",
            "9.10",
            "10.10",
            "11.10",
            "12.10",
            "13.10",
          ],
          datasets: [
            {
              label: "Изменение стоимости Bitcoin в долларах за 14 дней",
              data: this.chartData,
              fill: false,
              borderColor: "#2ee59d",
              tension: 0.1,
            },
          ],
        },
        {
          responsive: false,
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
          scales: {
            xAxes: [
              {
                barThickness: 13,
                ticks: {
                  fontSize: 12,
                  fontColor: "#ffffff",
                },
                gridLines: {
                  color: "rgba(255, 255, 255, 0.2)",
                  display: true,
                },
                stacked: true,
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 35000,
                  fontSize: 12,
                  fontColor: "#ffffff",
                },
                gridLines: {
                  color: "rgba(255, 255, 255, 0.2)",
                },
                display: true,
                stacked: true,
              },
            ],
          },
        }
      );
    },
  },
  mounted() {
    this.renderLineChart();
    console.log(this.data);
  },
  watch: {
    data: function() {
      this.$data._chart.destroy();
      console.log(this.data);
      console.log(this.options);
      this.renderLineChart();
    },
  },
};

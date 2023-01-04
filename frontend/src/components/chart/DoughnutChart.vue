<template>
  <v-container>
    <div class="text-h6">
      지체시간 비교데이터
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>
    <v-contents style="ma-0">
      <canvas
        ref="doughnut"
        width="360"
        style="margin-left: 40px"
      />
    </v-contents>
  </v-container>
</template>

<script>
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);

export default {
  name: 'PieChart',

  data() {
    return {
      doughnutChart: null,

      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'FF', 'FFF'],
      datasets: [
        {
          data: [30,10,5,5,10,10,20,5],
          backgroundColor: ['#198972', '#4BA895', '#C8DD9F', '#F5D48F', '#F1B98C', '#F5AEA7', '#F28376', '#E56F61'],
        }
      ]
    };
  },

  mounted() {
    this.drawDoughnutChart()
  },

  beforeDestroy() {
    this.doughnutChart.destroy();
  },

  methods: {
    drawDoughnutChart() {
      const ctx = this.$refs.doughnut.getContext("2d");
      this.doughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

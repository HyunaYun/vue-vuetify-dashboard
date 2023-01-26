<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      Pie Chart
    </div>
    <div class="text-body-2 mb-3">
      chart.js 라이브러리를 사용했습니다.
    </div>
    <v-container fluid>
      <canvas
        ref="pie"
        style="height: 33vh"
      />
    </v-container>
  </v-container>
</template>

<script>
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);

export default {
  name: 'VueVuetifyDashboardPieChart',

  data() {
    return {
      pieChart: null,

      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          data: [30,10,5,5,10,10,20,5],
          backgroundColor: ['#198972', '#4BA895', '#C8DD9F', '#F5D48F', '#F1B98C', '#F5AEA7', '#F28376', '#E56F61'],
        }
      ]
    };
  },

  mounted() {
    this.drawPieChart()
  },

  beforeDestroy() {
    this.pieChart.destroy();
  },

  methods: {
    drawPieChart() {
      const ctx = this.$refs.pie.getContext("2d");
      this.pieChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
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

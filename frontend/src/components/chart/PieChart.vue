<template>
  <v-container>
    <div class="text-h6">
      LOS 비율 (%)
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>
    <v-contents>
      <canvas
        ref="pie"
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
  name: 'VueVuetifyDashboardPieChart',

  data() {
    return {
      pieChart: null,

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
          responsive: false,
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

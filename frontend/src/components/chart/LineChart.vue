<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      Line Chart
    </div>
    <div class="text-body-2 mb-3">
      chart.js 라이브러리를 사용했습니다.
    </div>
    <v-container fluid>
      <canvas
        ref="line"
        style="height: 33vh"
      />
    </v-container>
  </v-container>
</template>

<script>
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);

export default {
  name: 'LineChart',

  data() {
    return {
      lineChart: null,

      labels: ["07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00"],
      datasets: [
        {
          label: 'standard',
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 400, 230, 500],
          borderColor: '#198972',
        },
        {
          label: 'compare',
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 340, 230, 400],
          borderColor: '#E56F61',
        }
      ]
    };
  },

  mounted() {
    this.drawLineChart()
  },

  beforeDestroy() {
    this.lineChart.destroy();
  },

  methods: {
    drawLineChart() {
      const ctx = this.$refs.line.getContext("2d");
      this.lineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options:{
          maintainAspectRatio :false
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

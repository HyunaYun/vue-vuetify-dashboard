<template>
  <v-container>
    <div class="text-h6">
      LOS F등급 이상 추이
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>
    <v-contents>
      <canvas
        ref="line"
        width="720"
      />
    </v-contents>
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
          label: '1주일 전',
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 400, 230, 500],
          borderColor: '#198972',
        },
        {
          label: '오늘',
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

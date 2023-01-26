<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      Column Chart
    </div>
    <div class="text-body-2 mb-3">
      chart.js 라이브러리를 사용했습니다.
    </div>
    <v-container fluid>
      <canvas
        ref="compare"
        style="height: 33vh"
      />
    </v-container>
  </v-container>
</template>

<script>
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);

export default {
  name: 'CompareBarChart',

  data() {
    return {
      compareChart: null,

      labels: [
        '서울', '부산', '대전', '대구', '울산',
        '제주','광주','충주','인천','강원',
      ],
      datasets: [
        {
          label: 'standard',
          data: [130,180,130,170,160,150,170,170,180,120],
          backgroundColor: '#4BA895',
        },
        {
          label: 'compare',
          data: [40,38,37,37,36,35,34,34,33,33],
          backgroundColor: '#F28376',
        }
      ]
    };
  },

  mounted() {
    this.drawCompareBarChart()
  },

  beforeDestroy() {
    this.compareChart.destroy();
  },

  methods: {
    drawCompareBarChart() {
      const ctx = this.$refs.compare.getContext("2d")
      this.compareChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

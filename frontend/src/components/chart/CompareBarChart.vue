<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      LOS 상위 TOP 10
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>
    <v-container fluid>
      <canvas
        ref="compare"
        style="height: 40vh"
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
        '강남역', '역삼역', '선릉역', '삼성역', '종합운동장역',
        '잠실새내역','잠실역','잠실나루역','강변역','구의역',
      ],
      datasets: [
        {
          label: '주기',
          data: [130,180,130,170,160,150,170,170,180,120],
          backgroundColor: '#4BA895',
        },
        {
          label: '지체시간(s/h)',
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

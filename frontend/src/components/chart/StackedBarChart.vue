<template>
  <v-containers>
    <div class="text-h6">
      지체시간 비교데이터
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>

    <v-contents>
      <canvas
        ref="stacked"
        width="460"
        height="383"
      />
    </v-contents>
  </v-containers>
</template>

<script>
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables);

export default {
  name: 'StackedBarChart',

  data() {
    return {
      stackedChart: null,

      labels: ['11:00', '11:15', '11:30', '11:45', '12:00','12:15','12:30', '12:45', '13:00', '13:15', '13:30','13:45'],
      datasets: [
        {
          label: '11:00',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#198972',
          barThickness: 14,
        },
        {
          label: '11:15',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#4BA895',
          barThickness: 14,
        },
        {
          label: '11:30',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#C8DD9F',
          barThickness: 14,
        },
        {
          label: '11:45',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#F5D48F',
          barThickness: 14,
        },
        {
          label: '12:00',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#F1B98C',
          barThickness: 14,
        },
        {
          label: '12:15',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#F5AEA7',
          barThickness: 14,
        },
        {
          label: '12:30',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#F28376',
          barThickness: 14,
        },
        {
          label: '12:45',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#E56F61',
          barThickness: 14,
        },
        {
          label: '13:00',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#4BA895',
          barThickness: 14,
        },
        {
          label: '13:15',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#4BA895',
          barThickness: 14,
        },
        {
          label: '13:30',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#C8DD9F',
          barThickness: 14,
        },
        {
          label: '13:45',
          data: [10,10,10,10,10,10,10,10,10,10,10,10],
          backgroundColor: '#F5D48F',
          barThickness: 14,
        },
      ]
    };
  },

  mounted() {
    this.drawStackedBarChart()
  },

  beforeDestroy() {
    this.stackedChart.destroy();
  },

  methods: {
    drawStackedBarChart() {
      const ctx = this.$refs.stacked.getContext("2d")
      this.stackedChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          responsive: false,
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            }
          },
          scales: {
            x: {
              stacked: true,
              ticks: {
                font: {
                  weight: 'bold',
                  size: 12,
                },
              },
            },
            y: {
              stacked: true,
              ticks: {
                font: {
                  weight: 'bold',
                  size: 12,
                },
              },
            }
          },
        }
      })

    }
  },
};
</script>

<style lang="scss" scoped>

</style>

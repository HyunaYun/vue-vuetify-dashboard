<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      Stacked Bar Chart
    </div>
    <div class="text-body-2 mb-3">
      chart.js 라이브러리를 사용했습니다.
    </div>

    <v-container fluid>
      <canvas
        ref="stacked"
        style="height: 33vh"
      />
    </v-container>
  </v-container>
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
          data: [10,5,0,0, 10,10,5,0,0, 10, 20, 0],
          backgroundColor: '#198972',
          barThickness: 14,
        },
        {
          label: '11:15',
          data: [30,0,0,50, 10, 30,0,0,50, 10, 20, 10 ],
          backgroundColor: '#4BA895',
          barThickness: 14,
        },
        {
          label: '11:30',
          data: [20,10,0,0, 10, 20,10,0,0, 10, 0, 30],
          backgroundColor: '#C8DD9F',
          barThickness: 14,
        },
        {
          label: '11:45',
          data: [0,15,0,10, 0, 0,15,0,10, 0, 0, 10],
          backgroundColor: '#F5D48F',
          barThickness: 14,
        },
        {
          label: '12:00',
          data: [0,30,50,0, 0, 0,30,50,0, 0, 10, 0],
          backgroundColor: '#F1B98C',
          barThickness: 14,
        },
        {
          label: '12:15',
          data: [0,30,10,0, 20, 0,30,10,0, 20, 0, 0],
          backgroundColor: '#F5AEA7',
          barThickness: 14,
        },
        {
          label: '12:30',
          data: [0,0,20,15, 20, 0,0,20,15, 20, 5, 30],
          backgroundColor: '#F28376',
          barThickness: 14,
        },
        {
          label: '12:45',
          data: [40,0,0,10, 0, 40,0,0,10, 0, 25, 10],
          backgroundColor: '#E56F61',
          barThickness: 14,
        },
        {
          label: '13:00',
          data: [0,10,0,0, 20, 0,10,0,0, 20, 20, 0],
          backgroundColor: '#4BA895',
          barThickness: 14,
        },
        {
          label: '13:15',
          data: [0,0,20,15, 10, 0,0,20,15, 10, 0, 10],
          backgroundColor: '#C8DD9F',
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
          responsive: true,
          maintainAspectRatio: false,
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

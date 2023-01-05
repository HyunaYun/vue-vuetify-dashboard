<template>
  <v-container>
    <div class="text-h6 font-weight-bold">
      지체시간 비교데이터
    </div>
    <div class="text-body-2 mb-3">
      오늘 vs 1주 전 비교데이터
    </div>
    <v-container fluid>
      <canvas
        ref="doughnut"
        style="height: 40vh"
      />
    </v-container>
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

      timeInterval: null,

      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'FF', 'FFF'],
      datasets: [],
      data: [10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,
        10,10,10,10,10,10,10,10,10,10,10,10,]
    };
  },

  mounted() {
    this.drawDoughnutChart();
  },

  beforeDestroy() {
    this.doughnutChart.destroy();
  },

  // setInterval 사용시 이미 차트가 그려져있는 상태에서는 차트를 또 그릴 수 없다
  // destroy() 를 이용해야 하는데,
  // interval 안에서 한번씩 destroy를 하면 차트가 그려지지 않는다
  // 나중에 데이터 들고오면서 데이터 새로 업데이트 될 때 차트를 다시 그릴 수 있도록 코드를 짜야할것같다....ㅜ
  methods: {
    drawDoughnutChart() {
      let ctx = this.$refs.doughnut.getContext("2d");
      this.doughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: this.labels,
          datasets: [{
            data: this.data,
            backgroundColor: ['#C8DD9F', '#C8DD9F', '#C8DD9F', '#C8DD9F', '#F5D48F', '#F5D48F', '#F5D48F', '#F5D48F', '#F5D48F', '#F5D48F', '#F1B98C', '#F5AEA7', '#F5AEA7','#C8DD9F', '#C8DD9F', '#F5D48F','#F5AEA7','#F5AEA7','#F5AEA7','#F5AEA7', '#F28376', '#F28376', '#F28376', '#F28376','#C8DD9F', '#C8DD9F', '#F5D48F', '#F28376', '#E56F61'],
            borderWidth: 1
          },
          {
            data: this.data,
            backgroundColor: this.todayDataColor(),
            borderWidth: 1
          },
          {
            data: this.data,
            backgroundColor: this.timeDataColor(),
            borderColor: '#FFF',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
      this.doughnutChart.update('none')
      // this.doughnutChart.destroy();
    },

    todayDataColor() {
      let color = []
      let fillCnt = (new Date().getHours() * 4) + (parseInt(new Date().getMinutes() / 15));

      this.data.forEach((d, i) => {
        if (i < fillCnt) {
          switch(i % 4) {
          case 0:
            color.push('#C8DD9F')
            break;
          case 1:
            color.push('#F1B98C')
            break;
          case 2:
            color.push('#4BA895')
            break;
          case 3:
            color.push('#F28376')
            break;
          }
        } else {
          color.push('#E0E0E0')
        }
      })

      return color
    },

    timeDataColor() {
      let color = [];
      let fillCnt = (new Date().getHours() * 4) + (parseInt(new Date().getMinutes() / 15));

      this.data.forEach((d, i) => {
        if (i == fillCnt -1) {
          color.push('#E0E0E0')
        } else {
          color.push('#FFF')
        }
      })

      return color
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

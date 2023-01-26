<template>
  <v-container>
    <v-container
      class="pa-3 mb-7"
      style="text-align: center"
    >
      <v-icon
        class="d-block mb-5"
        x-large
      >
        mdi-clock-outline
      </v-icon>
      <div
        v-if="liveTime"
        class="text-h3 font-weight-bold"
      >
        {{ liveTime }}
      </div>

      <div
        v-else
        class="text-h3 font-weight-bold"
        style="color: #E0E0E0"
      >
        00:00:00
      </div>
    </v-container>

    <v-divider class="my-7" />

    <v-container class="pa-3">
      <div class="text-h6 font-weight-bold mb-3">
        DAY
      </div>
      <!-- <div class="text-subtitle-2 font-weight-medium mb-5">
        오늘 평균 지체 시간
      </div> -->

      <v-row>
        <v-col
          class="text-h4 font-weight-bold pa-0 pl-3"
          cols="auto"
        >
          320
        </v-col>
        <v-col
          cols="auto"
          align-self="end"
          class="text-subtitle-1 pa-1"
        >
          개
        </v-col>

        <v-spacer />

        <v-col
          class="pa-0"
          cols="auto"
        >
          <div
            class="rounded-pill px-5 py-2"
            style="color: white; background-color: #4BA895"
          >
            standard
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-7" />

    <v-container class="pa-3">
      <div class="text-h6 font-weight-bold mb-3">
        A WEEK AGO
      </div>
      <!-- <div class="text-subtitle-2 font-weight-medium mb-5">
        1주 전 평균 지체 시간
      </div> -->

      <v-row>
        <v-col
          class="text-h4 font-weight-bold pa-0 pl-3"
          cols="auto"
        >
          160
        </v-col>
        <v-col
          cols="auto"
          align-self="end"
          class="text-subtitle-1 pa-1"
        >
          개
        </v-col>

        <v-spacer />

        <v-col
          class="pa-0"
          cols="auto"
        >
          <div
            class="rounded-pill px-5 py-2"
            style="color: #F28376; background-color: #F2F2F2"
          >
            <v-icon
              style="color: #F28376;"
              class="pa-0"
            >
              mdi-chevron-up
            </v-icon>
            50.00%
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-7" />

    <v-container class="pa-3">
      <div class="text-h6 font-weight-bold mb-3">
        2 WEEKS AGO
      </div>
      <!-- <div class="text-subtitle-2 font-weight-medium mb-5">
        2주 전 평균 지체 시간
      </div> -->

      <v-row>
        <v-col
          class="text-h4 font-weight-bold pa-0 pl-3"
          cols="auto"
        >
          480
        </v-col>
        <v-col
          cols="auto"
          align-self="end"
          class="text-subtitle-1 pa-1"
        >
          개
        </v-col>

        <v-spacer />

        <v-col
          class="pa-0"
          cols="auto"
        >
          <div
            class="rounded-pill px-5 py-2"
            style="color: #4BA895; background-color: #F2F2F2"
          >
            <v-icon style="color: #4BA895;">
              mdi-chevron-down
            </v-icon>
            50.00%
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-7" />
  </v-container>
</template>

<script>
export default {
  name: 'SideMenu',

  data() {
    return {
      liveTime: null,
      timeInterval: null,
    };
  },

  mounted() {
    this.timeInterval = setInterval(() => {
      this.getTime()
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  },

  methods: {
    getTime() {
      let time = new Date();
      let hour = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();

      this.liveTime = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

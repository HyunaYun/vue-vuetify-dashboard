<template>
  <v-container class="flex">
    <v-row>
      <v-col
        :hidden="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs'"
        cols="2"
        class="grey lighten-3 py-5 px-6"
      >
        <SideMenu />
      </v-col>

      <v-col class="red lighten-3">
        <v-row class="pa-3">
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <MapContainer />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <DoughnutChart />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <PieChart />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <CompareBarChart />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <LineChart />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="pa-3">
              <StackedBarChart />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'

import CompareBarChart from '../components/chart/CompareBarChart.vue'
import DoughnutChart from '../components/chart/DoughnutChart.vue'
import LineChart from '../components/chart/LineChart.vue'
import PieChart from '../components/chart/PieChart.vue'
import StackedBarChart from '../components/chart/StackedBarChart.vue'

import MapContainer from '../components/map/MapContainer.vue'

export default {
  name: 'VueVuetifyDashboardDashboard',

  components: {
    SideMenu,

    // map component
    MapContainer,

    //chart component
    CompareBarChart,
    DoughnutChart,
    LineChart,
    PieChart,
    StackedBarChart

  },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>

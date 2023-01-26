<template>
  <v-row style="height: 95vh">
    <!-- side -->
    <v-col
      :hidden="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'md'"
      cols="2"
      class="py-5 px-6"
    >
      <side-menu />
    </v-col>


    <!-- map card -->
    <v-col
      cols="12"
      lg="4"
      style="background-color: #F2F2F2; padding-right: 10px"
      class="pt-6"
    >
      <v-card
        style="height: 840px; width: 100%"
      >
        <map-container />
      </v-card>
    </v-col>

    <!-- dashboard contents -->
    <v-col
      style="background-color: #F2F2F2; padding-left: 10px"
      class="pr-4 pt-6"
    >
      <v-col>
        <v-row style="padding-bottom: 10px">
          <!-- line chart card -->
          <v-col
            cols="12"
            md="6"
            style="padding: 0 10px 0 0 "
          >
            <v-card
              style="height: 410px;"
            >
              <line-chart />
            </v-card>
          </v-col>

          <!-- stacked bar chart card -->
          <v-col
            cols="12"
            md="6"
            style="padding: 0 0 0 10px"
          >
            <v-card
              style="height: 410px"
            >
              <compare-bar-chart />
            </v-card>
          </v-col>
        </v-row>

        <v-row style="padding-top: 10px">
          <!-- doughnut chart card -->
          <v-col
            cols="12"
            lg="4"
            style="padding: 0 10px 0 0"
          >
            <v-card
              style="height: 410px"
            >
              <doughnut-chart />
            </v-card>
          </v-col>
          <!-- pie chart card -->
          <v-col
            cols="12"
            lg="4"
            style="padding: 0 10px 0 10px"
          >
            <v-card
              style="height: 410px"
            >
              <stacked-bar-chart />
            </v-card>
          </v-col>

          <!-- compare bar chart card -->
          <v-col
            cols="12"
            lg="4"
            style="padding: 0 0 0 10px"
          >
            <v-card
              style="height: 410px"
            >
              <pie-chart />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
  </v-row>
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
  name: 'MainDashboard',

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

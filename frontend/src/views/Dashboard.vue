<template>
  <v-row>
    <!-- side -->
    <v-col
      :hidden="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'md'"
      cols="2"
      class="py-5 px-6"
    >
      <side-menu />
    </v-col>

    <!-- dashboard contents -->
    <v-col style="background-color: #F2F2F2">
      <v-row
        class="pa-3"
      >
        <!-- map card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <map-container />
          </v-card>
        </v-col>

        <!-- doughnut chart card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <doughnut-chart />
          </v-card>
        </v-col>

        <!-- pie chart card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <pie-chart />
          </v-card>
        </v-col>

        <!-- compare bar chart card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <compare-bar-chart />
          </v-card>
        </v-col>

        <!-- line chart card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <line-chart />
          </v-card>
        </v-col>

        <!-- stacked bar chart card -->
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-3"
            style="height: 500px"
          >
            <stacked-bar-chart />
          </v-card>
        </v-col>
      </v-row>
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

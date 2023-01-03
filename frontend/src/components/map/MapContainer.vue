<template>
  <v-container>
    Map Container
    <l-map
      style="height: 350px"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
    </l-map>
  </v-container>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'VueVuetifyDashboardMapContainer',

  components: {
    LMap,
    LTileLayer
  },

  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 16,
      center: [37.374870, 126.947664],
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

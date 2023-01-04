<template>
  <v-container>
    <div class="text-h6">
      실시간 LOS 현황
    </div>
    <div class="text-body-2 mb-3">
      지체대상 교차로 130개
    </div>
    <l-map
      style="height: 360px"
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
  name: 'MapContainer',

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

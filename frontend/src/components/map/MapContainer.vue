<template>
  <v-container>
    <div class="d-flex">
      <div>
        <div class="text-h6 font-weight-bold">
          MAP
        </div>
        <div class="text-body-2 mb-3">
          Leaflet.js 라이브러리를 사용했습니다.
        </div>
      </div>
      <v-spacer />
      <div
        style="cursor: pointer;"
        @click="$router.push('/sub1')"
      >
        <v-icon>mdi-plus</v-icon>
      </div>
    </div>
    <l-map
      style="height: 81vh"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-feature-group>
        <l-polyline
          :lat-lngs="polyline.latlngs"
          :color="polyline.color"
        />
      </l-feature-group>
    </l-map>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LFeatureGroup, LPolyline } from 'vue2-leaflet'

export default {
  name: 'MapContainer',

  components: {
    LMap,
    LTileLayer,
    LFeatureGroup,
    LPolyline
  },

  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 16,
      center: [37.374870, 126.947664],

      polyline: {
        latlngs: [
          [
            37.37060156640261,
            126.9443689789968
          ],
          [
            37.36790016710327,
            126.94557912842652
          ],
          [
            37.36501479550529,
            126.94680707417047
          ],
          [
            37.36220003688695,
            126.94805281623013
          ],
          [
            37.36116745113664,
            126.94862228799911
          ],
          [
            37.35812621976558,
            126.94846212116369
          ]
        ],
        color: "red"
      }
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

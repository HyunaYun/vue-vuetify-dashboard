<template>
  <v-app>
    <v-app-bar
      v-if="getIsUserLogin"
      app
      color="#FFF"
      dark
      style="z-index: 5000;"
    >
      <v-app-bar-nav-icon
        color="#393939"
        @click="drawer = !drawer"
      />
      <!--
      <v-toolbar-title
        style="color: #4BA895"
        class="font-weight-bold"
      >
        지체산정 프로그램
      </v-toolbar-title>
      -->

      <v-spacer />
      <div
        style="color: grey;"
        class="text-right mr-3"
      >
        <div
          class="text-subtitle-2 font-weight-bold"
        >
          서울시 이지트래픽 님
        </div>
        <div
          class="text-body-2"
        >
          easy.traffic@
        </div>
      </div>
      <v-btn
        icon
        style="background-color: #F28376; width: 48px; height: 48px"
        class="mr-5"
      >
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>

      <v-btn
        class="rounded-pill px-5"
        style="background-color: #F28376"
        @click="logoutEasy()"
      >
        <v-icon
          class="mr-lg-2"
          dense
        >
          mdi-lock-open-outline
        </v-icon>
        <span
          class="text-button"
        >LOGOUT</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="z-index: 5000"
    >
      <v-list-item>
        <v-img
          src="./assets/22_이지트래픽_logo_가로_화이트bg.png"
          class="ma-9"
        />
      </v-list-item>

      <v-divider />

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          active-class=""
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'SubPage1', icon: 'mdi-view-dashboard', to: '/sub1' },
      { title: 'SubPage2', icon: 'mdi-view-dashboard', to: '/sub2' },
    ],
    right: null,
  }),

  computed: {
    getIsUserLogin() {
      return this.$store.getters.GET_IS_USER_LOGIN;
    }
  },

  methods: {
    logoutEasy() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.$store.commit("SET_IS_USER_LOGIN", false)
        this.$router.replace('/login')
      } else {
        return;
      }
    }
  }
};
</script>

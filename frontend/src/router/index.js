import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/vuex/store";

import Dashboard from "@/views/Dashboard.vue";
import SubPage1 from "@/views/SubPage1.vue";
import SubPage2 from "@/views/SubPage2.vue";

import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/main",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sub1",
    name: "SubPage1",
    component: SubPage1,
  },
  {
    path: "/sub2",
    name: "SubPage2",
    component: SubPage2,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

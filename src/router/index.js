import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import UserLayout from "../layouts/UserLayout/UserLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/User/Login/Login.vue"
          ),
      },
      {
        path: "/user/register",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/User/Register/Register.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

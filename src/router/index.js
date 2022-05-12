import Vue from "vue";
import VueRouter from "vue-router";

import UserLayout from "../layouts/UserLayout/UserLayout.vue";
import BasicLayout from "../layouts/BasicLayout/BasicLayout.vue";

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
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/User/Register/Register.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/",
        redirect: "/home/myself",
      },
      {
        path: "/home",
        name: "home",
        redirect: "/home/myself",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/home/myself",
            name: "myself",
            component: () =>
              import(
                /* webpackChunkName: "myself" */ "../views/Home/MySelf/MySelf.vue"
              ),
          },
        ],
      },
    ],
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

import Vue from "vue";
import VueRouter from "vue-router";

import UserLayout from "../layouts/UserLayout/UserLayout.vue";
import BasicLayout from "../layouts/BasicLayout/BasicLayout.vue";

Vue.use(VueRouter);
/**
 * hideInMenu 不需要渲染到左侧边菜单栏里
 * 有 name 字段的，才作为一级菜单去渲染
 * hideChildrenMenu 隐藏子路由
 */

const routes = [
  {
    path: "/user",
    hideInMenu: true,
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
        meta: {
          icon: "home",
          title: "首页",
        },
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/home/myself",
            name: "myself",
            meta: {
              title: "个人",
            },
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
    meta: {
      icon: "setting",
      title: "相关",
    },
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

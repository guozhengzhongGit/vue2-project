import Vue from "vue";
import { Button, Layout, Menu, Icon, Drawer, Radio } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

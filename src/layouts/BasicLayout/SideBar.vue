<template>
  <div style="width: 256px">
    <a-menu mode="inline" :theme="theme" :inline-collapsed="collapsed">
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <SubMenu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  name: "SideBar",
  components: {
    SubMenu,
  },
  props: {
    theme: {
      type: String,
      default: "dark",
    },
  },
  data() {
    console.log(this.$router.options.routes);
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData,
      selectedKeys: [],
      openKeys: [],
    };
  },
  methods: {
    getMenuData(routes) {
      const menuData = [];
      routes.forEach((item) => {
        if (!item.hideInMenu && item.name) {
          const copy = { ...item };
          delete copy.children;
          if (item.children && !item.hideChildrenMenu) {
            copy.children = this.getMenuData(item.children);
          }
          menuData.push(copy);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenMenu &&
          item.children
        ) {
          menuData.push(...this.getMenuData(item.children));
        }
      });
      return menuData;
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped></style>

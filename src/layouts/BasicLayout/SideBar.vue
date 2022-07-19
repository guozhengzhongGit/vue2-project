<template>
  <div :class="mode === 'horizontal' ? 'horizontal-sidebar-outer' : ''">
    <a-menu
      :mode="mode"
      :theme="theme"
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
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
    mode: {
      type: String,
      default: "inline",
    },
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path],
    };
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      routes.forEach((item) => {
        if (!item.hideInMenu && item.name) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];
          const copy = { ...item };
          delete copy.children;
          if (item.children && !item.hideChildrenMenu) {
            copy.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path,
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(copy);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      });
      return menuData;
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  computed: {
    menuStyle() {
      if (this.mode === "horizontal") {
        return { height: 64 };
      }
      return undefined;
    },
  },
  watch: {
    "$route.path": function (val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    },
  },
};
</script>

<style scoped>
.horizontal-sidebar-outer .ant-menu-horizontal {
  line-height: 62px;
}
</style>

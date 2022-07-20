<template>
  <div class="basic-header">
    <div class="user-info" v-if="user === 'true'">
      <a-dropdown>
        <span>
          <a-icon type="user" />&nbsp;
          <span>用户信息</span>
        </span>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicHeader",
  props: {
    user: {
      type: String,
      default: () => "true",
    },
  },
  methods: {
    handleMenuClick() {},
  },
};
</script>

<style lang="less" scoped>
.basic-header {
  font-size: 14px;
  flex: 1;
  padding-right: 16px;
  display: flex;
  justify-content: flex-end;
  .user-info {
    cursor: pointer;
  }
}
</style>

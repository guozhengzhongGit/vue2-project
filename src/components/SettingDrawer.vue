<template>
  <div>
    <a-drawer
      title="系统设置"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <div @click="visible = !visible" class="handleBtn">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格</h2>
        <a-radio-group
          name="themeStyle"
          @change="(e) => themeChange(e, 'theme')"
          :value="$route.query.theme || 'dark'"
        >
          <a-radio value="dark">暗黑</a-radio>
          <a-radio value="light">明亮</a-radio>
        </a-radio-group>
        <h2>导航位置</h2>
        <a-radio-group
          name="navStyle"
          v-model="nav"
          @change="(e) => themeChange(e, 'nav')"
          :value="$route.query.nav || 'left'"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
        <h2>用户信息</h2>
        <a-switch
          checked-children="展示"
          un-checked-children="隐藏"
          default-checked
          @change="userInfoToggle"
        />
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "SettingDrawer",
  data() {
    return {
      visible: false,
      theme: "dark",
      nav: "left",
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    onClose() {
      this.visible = false;
    },
    themeChange(e, type) {
      this.$router.push({
        query: { ...this.$route.query, [type]: e.target.value },
      });
      console.log("theme changed", type, e.target.value);
    },
    userInfoToggle(flag) {
      this.$router.push({
        query: { ...this.$route.query, user: flag },
      });
    },
  },
};
</script>

<style scoped>
.handleBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 300px;
  width: 48px;
  height: 48px;
  background-color: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}
</style>

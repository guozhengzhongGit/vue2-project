<template>
  <div :class="['basicLayoutOuter', `nav-${navStyle}`, `theme-${themeStyle}`]">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-if="navStyle === 'left'"
        v-model="collapsed"
        :trigger="null"
        collapsible
        :theme="themeStyle"
        width="256px"
      >
        <div class="logo-outer"><div class="logo"></div></div>
        <SideBar :theme="themeStyle" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          :class="navStyle === 'left' ? 'header-light' : 'header-dark'"
        >
          <a-icon
            v-if="navStyle === 'left'"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <div v-else class="horizontal-nav-outer">
            <div class="logo-outer"><div class="logo"></div></div>
            <SideBar :theme="themeStyle" mode="horizontal" />
          </div>
          <Header :user="user" />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px 0',
            padding: '14px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="padding: 16px 16px 0">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SettingDrawer from "@/components/SettingDrawer";
import SideBar from "@/layouts/BasicLayout/SideBar";
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SettingDrawer,
    SideBar,
  },
  data() {
    return { collapsed: false };
  },
  computed: {
    navStyle: {
      get: function () {
        return this.$route.query.nav || "left";
      },
    },
    themeStyle: {
      get: function () {
        return this.$route.query.theme || "dark";
      },
    },
    user() {
      return this.$route.query.user || "true";
    },
  },
};
</script>

<style lang="less">
.basicLayoutOuter {
}
#components-layout-demo-custom-trigger {
  height: 100vh;
}
.theme-dark {
  .trigger {
    font-size: 18px;
    line-height: 70px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo-outer {
    .logo {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .header-dark {
    background: #001529;
    padding: 0;
    font-size: 0;
    display: flex;
  }
  .header-light {
    background: #fff;
    padding: 0;
    font-size: 0;
    display: flex;
  }
}
.theme-light {
  .trigger {
    font-size: 18px;
    line-height: 70px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo-outer {
    background: rgba(0, 0, 0, 0.2);
    .logo {
      background: rgba(255, 255, 255, 1);
    }
  }
  .header-light {
    background: #fff;
    padding: 0;
    font-size: 0;
    display: flex;
  }
  .header-dark {
    background: #fff;
    padding: 0;
    font-size: 0;
    display: flex;
  }
}
.nav-top {
  .logo-outer {
    padding: 16px;
    .logo {
      width: 224px;
      height: 32px;
    }
  }
}
.nav-left {
  .logo-outer {
    padding: 16px;
    .logo {
      height: 32px;
    }
  }
}
.horizontal-nav-outer {
  display: flex;
}
</style>

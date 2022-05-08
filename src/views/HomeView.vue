<template>
  <div class="home">
    <a-button>按钮</a-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

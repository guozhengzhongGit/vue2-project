const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9000,
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: "always", // less 4 兼容 less 3 的写法 https://github.com/vueComponent/ant-design-vue/issues/3665
        },
      },
    },
  },
});

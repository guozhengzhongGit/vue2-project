# 基础镜像
FROM node:16.15.1
# 安装开发依赖
RUN npm install --location=global --registry=https://registry.npmmirror.com typescript @vue/cli
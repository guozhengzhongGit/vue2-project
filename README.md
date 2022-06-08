# vue2-project

## Project setup
1. 下载安装 docker
2. 根据项目内的 Dockerfile 构建镜像
```shell
docker image build -t fedev .
```
3. 根据上一步生成的镜像启动开发容器
```shell
docker container run -v "$(pwd)":/workspace -p 9000:9000 -it --name fec fedev /bin/bash
```
4. 进入容器存放项目的目录 workspace，运行 yarn 安装项目依赖
```shell
cd workspace
yarn
```
5. 运行 npm script 启动项目
```shell
yarn serve
```
6. 浏览器访问 http://localhost:9000/

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

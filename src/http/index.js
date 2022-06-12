import { extend } from "umi-request";
const BASE_URL = "https://mock.apifox.cn/m1/1104157-0-default";

const request = extend({
  prefix: BASE_URL,
  timeout: 1500,
});

export default request;

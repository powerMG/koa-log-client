import axios from "axios";
const httpRequest = axios.create({
  baseURL: "",
  timeout: 30000,
});
/* 请求拦截器 */
httpRequest.interceptors.request.use(
  (config) => {
    let isLogin = config.url.match("/api/login");
    // 除登录接口外其他接口请求头必须含token才可访问
    if (!isLogin) {
      const token = sessionStorage.getItem("LOG_TOKEN") || "";
      // token头设置
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
/* 响应拦截器 */
httpRequest.interceptors.response.use(
  (res) => {
    if (res.data.code === 1) {
      return Promise.resolve(res.data.data);
    } else {
      return Promise.reject(res.data);
    }
  },
  (err) => {
    if (!err.response) {
      // 服务器连接超时
      return;
    }
    if (err.response.status === 401) {
      // 清空localStorage
      localStorage.clear();
      // 清空sessionStorage
      sessionStorage.clear();
      // 身份验证失败（跳转回登录页）
      location.href = "/#/login";
    }
    return Promise.reject(err);
  }
);
export default httpRequest;

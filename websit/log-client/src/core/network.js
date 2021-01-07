import axios from "axios";
const httpRequest = axios.create({
  baseURL: "",
  timeout: 30000,
});
/* 请求拦截器 */
http.interceptors.request.use(
  (config) => {
    const token = "";
    // token头设置
    if (!token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);
/* 响应拦截器 */
http.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
    } else {
      Promise.resolve(res.data.data);
    }
  },
  (err) => {
    if (!err.response) {
      // 服务器连接超时
      return;
    }
    if (err.response.status === 401) {
      // 身份验证失败
      return err.response;
    }
    return err;
  }
);
export default httpRequest;

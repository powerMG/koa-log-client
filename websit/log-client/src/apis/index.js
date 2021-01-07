import httpRequest from "../core/network";

const baseApi = "";
/* 登录 */
function Login(data) {
  return new Promise((resolve, reject) => {
    httpRequest
      .post(`${baseApi}/api/login`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default {
  Login,
};

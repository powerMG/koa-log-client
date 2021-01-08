import httpRequest from "../core/network";

const BASEAPI = import.meta.env.VITE_API_LOGIN;
/* 登录 */
function Login(data) {
  console.log(process.env.NODE_ENV);
  console.log(BASEAPI);
  return new Promise((resolve, reject) => {
    httpRequest
      .post(`${BASEAPI}/login`, data)
      .then((res) => {
        debugger;
        resolve(res);
      })
      .catch((err) => {
        debugger;
        reject(err);
      });
  });
}
export { Login };

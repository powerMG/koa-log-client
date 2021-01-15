import httpRequest from "../core/network";

const BASEAPI = import.meta.env.VITE_API_MENU;
/* 获取菜单信息 */
function GetMenuList() {
  console.log(process.env.NODE_ENV);
  console.log(BASEAPI);
  return new Promise((resolve, reject) => {
    httpRequest
      .get(`${BASEAPI}/GetMenuList`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export { GetMenuList };

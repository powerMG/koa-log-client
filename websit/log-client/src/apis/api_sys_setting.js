import httpRequest from "../core/network";
const BASEAPI = import.meta.env.VITE_API_SETTIGN;
/* 获取数据库信息 */
function GetDatabaseList(data) {
  return new Promise((resolve, reject) => {
    httpRequest
      .post(`${BASEAPI}/getDataBaseName`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export { GetDatabaseList };

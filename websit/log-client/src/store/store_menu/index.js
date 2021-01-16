import { GetMenuList } from "../../apis/api_nav.js";
const state = {
  menuList: [],
};
const actions = {
  QueryMenuList({ commit }) {
    GetMenuList()
      .then((res) => {
        commit("setMenuList", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
const mutations = {
  setMenuList(state, data) {
    state.menuList = data;
  },
};
const getters = {
  menuList(state) {
    return state.menuList;
  },
};
export default {
  namespace: true,
  state,
  actions,
  mutations,
  getters,
};

import { createStore } from "vuex";
/* Impoort Menu Stroe */
import menuStore from "./store_menu/index";
/* Imprort Menu Stroe End */
const store = createStore({
  modules: {
    menuStore,
  },
});

export default store;

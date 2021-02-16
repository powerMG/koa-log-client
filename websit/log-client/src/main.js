import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
/* Import vueRouter */
import router from "./router/index";
/* Import vueRouter End*/
/* Import ElementUI3 */
import element3 from "element3";
import "/@modules/element3/lib/theme-chalk/index.css";
/* Import ElementUI3 End*/
/* Import vuex */
import store from "./store/index";
/* Import vuex End*/
// /* Import Echarts */
// import echarts from "echarts";
// /* Import Echarts End */
const app = createApp(App);
app.use(router);
app.use(element3);
app.use(store);
// app.use(echarts);
app.mount("#app");

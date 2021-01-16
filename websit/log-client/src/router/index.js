import { createRouter, createWebHashHistory } from "vue-router";
import layout from "../components/layout/default.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/login/index.vue"),
    },
    {
      path: "/",
      name: "base",
      component: layout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../pages/Home/index.vue"),
        },
        {
          path:"/info",
          name:"info",
          component:()=>import("../pages/Info/index.vue")
        },
        {
          path:"/error",
          name:"error",
          component:()=>import("../pages/Error/index.vue")
        },
        {
          path:"/warning",
          name:"warning",
          component:()=>import("../pages/Warning/index.vue")
        },
        {
          path:"/setting",
          name:"setting",
          component:()=>import("../pages/Setting/index.vue")
        }
      ],
    },
  ],
});
export default router;

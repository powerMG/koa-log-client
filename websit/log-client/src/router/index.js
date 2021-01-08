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
      ],
    },
  ],
});
export default router;

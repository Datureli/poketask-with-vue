import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: () => import("../components/Home.vue"),
    },
    {
      name: "UserInterface",
      path: "/userinterface",
      component: () => import("../components/UserInterface"),
    },
  ],
});
export default router;

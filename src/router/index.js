import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home";
import UserInterface from "../components/UserInterface";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "UserInterface",
      path: "/userinterface",
      component: UserInterface,
    },
  ],
});
export default router;

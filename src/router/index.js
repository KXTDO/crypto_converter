import VueRouter from "vue-router";

import Home from "../pages/Home";
import Wallet from "../pages/Wallet";
import NotFound from "../pages/404";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/wallet",
      name: "wallet",
      component: Wallet,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

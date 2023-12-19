import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: () =>
      import(/* webpackChunkName: "friends" */ "../views/FriendsView.vue"),
  },
  {
    path: "/presents",
    name: "presents",
    component: () =>
      import(/* webpackChunkName: "friends" */ "../views/PresentsView.vue"),
  },
  {
    path: "/divider",
    name: "divider",
    component: () =>
      import(/* webpackChunkName: "friends" */ "../views/DividerView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

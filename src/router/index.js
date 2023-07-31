import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
    meta: {
      title: "Homepage",
    },
  },

  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/errors/Notfound.vue"),
    meta: {
      title: "Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = `${to.meta.title}`;
});

export default router;

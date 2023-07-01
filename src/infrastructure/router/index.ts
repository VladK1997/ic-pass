import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/notFound/views/NotFoundView.vue";
import Onboarding from "@/home/views/Onboarding.vue";
import Home from "@/home/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/onboarding",
      name: "Onboarding",
      component: Onboarding,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    return next({ name: "Home" });
  }
  next();
});

export default router;

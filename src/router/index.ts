import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { routes } from "./routes";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeResolve((to, from) => {
  document.title = `${to.meta.title} | ULink`;
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated && to.meta.authRequired)
    return { name: "AppLoader" };
});
export default router;

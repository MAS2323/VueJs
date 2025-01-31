import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/contador",
      name: "contador",
      component: () => import("../modules/contador/components/ContadorNumerico.vue"),
    },
    {
      path: "/lista-tareas",
      name: "ListaDeTareas",
      component: () => import("../modules/ListaTareas/components/listaDeTareas.vue"),
    },
    {
      path: "/registrar",
      name: "Registrar",
      component: () => import("../modules/registro/views/RegistrarView.vue"),
    },
  ],
});

export default router;

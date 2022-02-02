import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path:"/iot/devices",
    name:"Devices",
    component: () => import("../views/Devices.vue")
  },
  {
    path:"/iot/devices/create",
    name:"New Device",
    component: () => import("../components/CreateDevice.vue")
  },
  {
    path:"/iot/devices/update/:id",
    name:"EditDevice",
    component: () => import("../components/EditDevice.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

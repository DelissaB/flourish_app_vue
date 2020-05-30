import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LocationsIndex from "../views/LocationsIndex.vue";
import PlantsIndex from "../views/PlantsIndex.vue";

import LocationsShow from "../views/LocationsShow.vue";

Vue.use(VueRouter);

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
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/locations",
    name: "locations-index",
    component: LocationsIndex,
  },
  {
    path: "/plants",
    name: "plants-index",
    component: PlantsIndex,
  },
  {
    path: "/locations/:id",
    name: "locations - show",
    component: LocationsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

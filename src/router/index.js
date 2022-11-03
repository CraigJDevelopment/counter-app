import { createRouter, createWebHashHistory } from 'vue-router'
import Number from "@/views/Number";

const routes = [
  {
    path: '/',
    name: 'Number Generator',
    component: Number
  },
  {
    path: '/user-generator',
    name: 'User-generator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User-Generator.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

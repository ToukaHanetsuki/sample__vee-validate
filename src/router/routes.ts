import { RouteConfig } from 'vue-router';

// pages
import Home from '@/pages/Home.vue';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: (): any => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  }
];
import Vue from 'vue';
import VueRouter from 'vue-router';
import { parseQuery, stringifyQuery } from './routeQuery';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  parseQuery,
  stringifyQuery,
  routes
});

export default router;

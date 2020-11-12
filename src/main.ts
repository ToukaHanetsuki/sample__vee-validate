import Vue, { VNode } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// plugins
import veeValidate from '@/plugins/veeValidate';

Vue.use(veeValidate);

new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app');

import Vue from "vue";
import App from "./App.vue";
import router from './router';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import JwPagination from 'jw-vue-pagination';

Vue.component('v-select', vSelect);
Vue.component('jw-pagination', JwPagination);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");

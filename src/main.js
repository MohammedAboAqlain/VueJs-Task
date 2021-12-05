import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import JQuery from 'jquery'
window.$ = JQuery

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.http.options.root = 'https://blogs-688e4-default-rtdb.firebaseio.com/';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

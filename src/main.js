import Vue from 'vue';
import './plugins/axios'
import './plugins/vuetify'
import Kraken from './Kraken.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Kraken),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);

Vue.loadScript("https://code.iconify.design/1/1.0.7/iconify.min.js")

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
Vue.config.productionTip = false

new Vue({
  store,bootstrap,router,
  render: h => h(App),
}).$mount('#app')

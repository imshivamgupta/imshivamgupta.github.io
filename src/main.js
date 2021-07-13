import Vue from 'vue'
import App from './App.vue'
import './FirebaseInit'
import store from './store'
import router from './router'
import './styles/reset.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')

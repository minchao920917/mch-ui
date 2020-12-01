import Vue from 'vue'
import App from './App.vue'

import McUI from "./../packages"
Vue.use(McUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

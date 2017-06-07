import Vue from 'vue'
import VueHead from 'vue-head'

import App from './App.vue'

Vue.use(VueHead)

new Vue({
  el: '#app',
  render: h => h(App)
})

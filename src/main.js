import Vue from 'vue'
import VueHead from 'vue-head'

import App from './App.vue'

Vue.use(VueHead)

new Vue({
  el: '#app',
  render: h => h(App)
})




/*----------  js control  ----------*/

// lock screen orientation
// screen.lockOrientation('portrait'); // it's not work...


/*----------  events  ----------*/

// disable touchmove
document.addEventListener("touchmove", function(event) {
  event.preventDefault();
}, false);

window.addEventListener('resize', function() {
  window.scrollTo(0, 1);
}, true);

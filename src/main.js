import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters);


new Vue({
  el: '#app',
  render: h => h(App)
})

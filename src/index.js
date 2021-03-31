import Vue from 'vue'
import App from './App'
import store from './store/index'

const vm = new Vue({

  beforeCreate() {
    Vue.prototype.$bus = this
  },
  components: {
    App: App
  },
  template: '<App/>',
  store
}).$mount('#root')
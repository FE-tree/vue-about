import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import FastClick from 'fastclick'

// 自定义指令
import Directives from './directives';
Vue.use(Directives);

Vue.config.productionTip = false
// FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

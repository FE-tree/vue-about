import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'

// // 导入组件库
// import ColorButton from './../packages/index'
// import TreeSwitch from './../packages/index'
// import Toast from './../packages/index'
// // 注册组件库
// Vue.use(ColorButton)
// Vue.use(Switch)
// Vue.use(Toast)

import TreeUI from './../packages/index.js'
Vue.use(TreeUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

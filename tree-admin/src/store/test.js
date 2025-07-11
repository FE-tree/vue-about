import Vue from 'Vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  // 定义状态
  state: {
    user: {
      name: 'xiaoming'
    }
  },
  actions: {
    // 封装一个 ajax 方法
    login(context) {
      axios({
        method: 'post',
        url: '/user',
        data: context.state.user
      })
    }
  }
})

export default store

/*methods: {
    submitForm () {
        this.$store.dispatch('login')
    }
}*/

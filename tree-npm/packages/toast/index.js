import Toast from './src/toast.vue'

Toast.install = function (Vue) {
    Vue.component(Toast.name, Toast)
}

export default Toast

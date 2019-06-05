import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import EgoDialog from './../packages/index'
import EgoToast from './../packages/toast/index'

// 注册组件库
Vue.use(EgoDialog)
Vue.use(EgoToast)

Vue.prototype.$dialog.setDefaultOptions({
  confirmButtonText: '修改按钮默认文字'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

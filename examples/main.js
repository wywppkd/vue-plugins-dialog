import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import Ego from './../packages/index'

// 注册组件库
Vue.use(Ego)

Vue.prototype.$dialog.setDefaultOptions({
  confirmButtonText: '修改按钮默认文字'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

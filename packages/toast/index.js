import Vue from 'vue'
import EgoToast from './src/component.vue'

/**
 * 1.初始化组件
 * 2.组件传入props数据
 * 3.设置show=true
 * 4.定时器消失show=false,this.$destory,this.$ref.remove
 */

let instance

function initInstance () {
  instance = new (Vue.extend(EgoToast))({
    el: document.createElement('div')
  })
}

function Toast (content, duration = 2000) {
  initInstance()

  // 合并配置(当前配置 + 用户输入配置)
  Object.assign(instance, { content })

  document.body.appendChild(instance.$el)

  // DOM渲染完成后，再显示组件
  Vue.nextTick(() => {
    instance.show = true
    setTimeout(() => {
      instance.show = false
      instance.$el.remove()
      instance.$destory()
    }, duration)
  })
}

Toast.install = (Vue) => {
  Vue.prototype.$toast = Toast
}

export default Toast

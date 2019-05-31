import Vue from 'vue'
import EgoDialog from './src/component.vue'

let instance

function initInstance () {
  // 如果销毁了上一个实例,则它的弹框事件也跟着消失了,点击按钮无法关闭
  // if (instance) {
  //   instance.$destroy()
  // }

  instance = new (Vue.extend(EgoDialog))({
    el: document.createElement('div')
  })
}

// 默认配置
Dialog.defaultOptions = {
  title: '',
  content: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showCancelButton: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action)
  }
}
function Dialog (options) {
  return new Promise((resolve, reject) => {
    // 创建组件实例
    initInstance()

    // 合并配置(当前配置 + 用户输入配置)
    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject
    })

    // 将dom渲染到body中
    document.body.appendChild(instance.$el)

    // DOM渲染完成后，再显示组件
    Vue.nextTick(() => {
      instance.show = true
    })
  })
}

// alert弹框
Dialog.alert = Dialog

// confirm弹框
Dialog.confirm = options => Dialog({
  showCancelButton: true,
  ...options
})

// 修改默认配置
Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options)
}

// 重置默认配置
Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions }
}
Dialog.resetDefaultOptions()

Dialog.install = () => {
  Vue.use(EgoDialog)
}

// Dialog.Component = EgoDialog

Vue.prototype.$dialog = Dialog

export default Dialog

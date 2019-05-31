/**
 * 整合所有的组件，对外导出，即一个完整的组件库
 *
 * 使用时
 * import Ego from 'ego' 一次引入所有组件
 *
 * 如果想要按需引入组件
 * 可能需要安装babel-plugin-import插件
 * import {xxx,yyy} from 'ego' 引入指定的组件
 */

// 导入组件
import Dialog from './dialog'

// 存储组件列表
const components = [
  Dialog
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}

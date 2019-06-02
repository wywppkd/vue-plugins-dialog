/**
 * 整合所有的组件，对外导出，即一个完整的组件库
 *
 * 1.使用时
 * import Ego from 'ego' 一次引入所有组件
 *
 * 2.如果想要按需引入组件
 * 可能需要安装babel-plugin-import插件
 * import {xxx,yyy} from 'ego' 引入指定的组件
 */

// 导入组件
import Dialog from './dialog'

// 存储组件列表
const components = [
  Dialog
]

// 定义 install 方法，接收 Vue 作为参数。
// 所有组件components都将被注册为插件
const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export default {
  // 导出的对象必须具有 install，Vue.use(Ego)会调用这个install方法
  install,
  // 以下是组件列表, 支持按需加载指定插件 import {componentName} from 'Ego' ,需要配合babel-plugin-import插件使用
  // babel-plugin-import插件会将代码import {componentName} from 'Ego'转换成 => import Button from 'ego/lib/button'; import 'ego/lib/button/style';
  ...components
}

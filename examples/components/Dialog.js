import Vue from 'vue'
import Dialog from './Dialog.vue'
console.log(typeof Dialog)
const instance = new (Vue.extend(Dialog))()
function fn (options) {
  return new Promise((resolve, reject) => {
    Object.assign(instance, {
      resolve,
      reject
    })
  })
}
Vue.prototype.$dialog = fn
export default fn

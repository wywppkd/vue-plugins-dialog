import Vue from 'vue'
import EgoDialog from './Dialog.vue'

let instance;

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (Vue.extend(EgoDialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });

  instance.$on('input', value => {
    instance.value = value;
  });
}

function Dialog(options) {
  return new Promise((resolve, reject) => {
    initInstance();

    Object.assign(instance, {
      resolve,
      reject
    });
  });
}

Dialog.alert = Dialog;
Dialog.install = () => {
  Vue.use(EgoDialog);
};
Vue.prototype.$dialog = Dialog
export default Dialog

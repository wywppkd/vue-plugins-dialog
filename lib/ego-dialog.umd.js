(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ego-dialog"] = factory(require("vue"));
	else
		root["ego-dialog"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7d3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "e4eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_id_0c2adc5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7d3e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_id_0c2adc5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_id_0c2adc5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_style_index_0_id_0c2adc5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"260e2e16-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/component.vue?vue&type=template&id=0c2adc5f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"ego-overlay"},[_c('div',{staticClass:"ego-dialog"},[(_vm.title)?_c('div',{staticClass:"ego-dialog__header"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('div',{staticClass:"ego-dialog__content"},[_vm._v(_vm._s(_vm.content))]),_c('div',{staticClass:"ego-dialog__footer"},[(_vm.showCancelButton)?_c('button',{staticClass:"ego-dialog__cancel",style:({color:_vm.cancelButtonColor}),on:{"click":function($event){return _vm.handleAction('cancel')}}},[_vm._v(_vm._s(_vm.cancelButtonText || '取消'))]):_vm._e(),_c('button',{staticClass:"ego-dialog__confirm",style:({color:_vm.confirmButtonColor}),on:{"click":function($event){return _vm.handleAction('confirm')}}},[_vm._v(_vm._s(_vm.confirmButtonText || '确定'))])])])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/dialog/src/component.vue?vue&type=template&id=0c2adc5f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'ego-dialog',
  props: {
    title: [String, Number],
    content: [String, Number],
    confirmButtonText: String,
    confirmButtonColor: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    showCancelButton: Boolean,
    callback: Function
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleAction (action) {
      // 隐藏dom
      this.show = false
      // 移除dom
      this.$el.remove()
      // 销毁实例
      this.$destroy()
      // 回调函数
      this.callback(action)
    }
  }
});

// CONCATENATED MODULE: ./packages/dialog/src/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dialog/src/component.vue?vue&type=style&index=0&id=0c2adc5f&lang=scss&scoped=true&
var componentvue_type_style_index_0_id_0c2adc5f_lang_scss_scoped_true_ = __webpack_require__("e4eb");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/dialog/src/component.vue






/* normalize component */

var component = normalizeComponent(
  src_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0c2adc5f",
  null
  
)

/* harmony default export */ var src_component = (component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js



let instance

function initInstance () {
  // 如果销毁了上一个实例,则它的弹框事件也跟着消失了,点击按钮无法关闭
  // if (instance) {
  //   instance.$destroy()
  // }

  // Vue.extend(EgoDialog) => 创建一个EgoDialog子实例
  instance = new (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(src_component))({
    // 将EgoDialog挂载到新建的div上
    el: document.createElement('div')
  })
}

// 默认配置
Dialog.defaultOptions = {
  title: '',
  content: '',
  confirmButtonText: '确定',
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

    // 添加到body中
    document.body.appendChild(instance.$el)

    // DOM渲染完成后，再显示组件
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
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
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(src_component)
  // 添加全局API
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$dialog = Dialog
}

// Dialog.Component = EgoDialog

/* harmony default export */ var dialog = (Dialog);

// CONCATENATED MODULE: ./packages/index.js
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


// 存储组件列表
const components = [
  dialog
]

// 定义 install 方法，接收 Vue 作为参数。
// 所有组件components都将被注册为插件
const install = function (Vue) {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，Vue.use(Ego)会调用这个install方法
  install,
  // 以下是组件列表, 支持按需加载指定插件 import {componentName} from 'Ego' ,需要配合babel-plugin-import插件使用
  // babel-plugin-import插件会将代码import {componentName} from 'Ego'转换成 => import Button from 'ego/lib/button'; import 'ego/lib/button/style';
  ...components
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=ego-dialog.umd.js.map
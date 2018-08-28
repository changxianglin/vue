/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"./vue-toast.vue\"");


let Toast = {}
Toast.install = function (Vue, options) {

    var opt = {
        duration: 3000,
    }

    for(var key in options) {
        opt[key] = options[key]
    }

    Vue.prototype.$totast = function (message, option) {

        if(typeof option == 'object') {
            for(var key in option) {
                opt[key] = option[key]
            }
        }
        const ToastController = Vue.extend(__WEBPACK_IMPORTED_MODULE_0__vue_toast_vue___default.a)

        var instance = new ToastController().$mount(document.createElement('div'))

        instance.message = message
        instance.visible = true

        setTimeout(() => {
            instance.visible = false
            document.body.removeChild(instance.$el)
        }, opt.duration)
    }
    Vue.prototype.$totast['show'] = function (message, option) {
        Vue.prototype.$totast(message, option)
    }
    Vue.prototype.$totast['success'] = function (message, option) {
        Vue.prototype.$totast(message, option)
    }
    Vue.prototype.$totast['info'] = function (message, option) {
        Vue.prototype.$totast(message, option)
    }
    Vue.prototype.$totast['error'] = function (message, option) {
        Vue.prototype.$totast(message, option)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ })
/******/ ]);
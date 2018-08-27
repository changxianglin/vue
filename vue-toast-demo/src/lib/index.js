import  ToastComponet from './vue-toast.vue'

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
        const ToastController = Vue.extend(ToastComponet)

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

export default Toast
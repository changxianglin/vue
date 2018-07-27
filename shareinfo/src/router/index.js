import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'Root',
      component: Root
    },
    {
      path: '/:id',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

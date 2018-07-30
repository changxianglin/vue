import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [
        {
          path: 'title',
          name: 'title',
          component: Title,
        },
        {
          path: 'image',
          name: 'image',
          component: Image,
        }
      ]
    }
  ]
})

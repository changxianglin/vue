<template>
    <div>
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.name}}</span>
      <router-link to = "/goods/title">显示商品标题</router-link>
      <router-link to = "/goods/image">显示商品图片</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link :to = "{name: 'cart', params: {cartId: 123}}">跳转到购物车页面</router-link>
    </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBread from '@/components/NavBread'
    export default {
      methods: {
          jump () {
            this.$router.push({path: '/cart?goodsId=321'})
          }
      },
      components:｛
            NavHeader,
            NavFooter,
            NavBread,
    }
</script>

<style scoped>

</style>

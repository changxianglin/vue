<template>
    <div>


      这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.name}}</span>
      <router-link to = "/goods/title">显示商品标题</router-link>
      <router-link to = "/goods/image">显示商品图片</router-link>
    </div>
</template>

<script>





    export default {
    }
</script>

<style scoped>

</style>

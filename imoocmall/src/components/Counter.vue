<template>
  <div>
    <button @click = "increment">+</button>
    <button @click = "decrement">-</button>
    <p><span>{{number}}</span></p>
  </div>
</template>

<script>
    export default {
      props: ['number'],
        name: "Counter.vue",
        data () {
          return {
            number: 0
          }
        },
      methods: {
          increment () {
            this.$emit('incre')
          },
          decrement () {
            this.$emit('decre')
          }
      }
    }
</script>

<style scoped>

</style>

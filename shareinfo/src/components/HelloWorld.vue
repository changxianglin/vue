<template>
  <div class="hello">
    <div>{{this.msg}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleGetData () {
      axios.get('https://www.easy-mock.com/mock/5aead18d44f4206ef1c42cfd/example/test', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted () {
    console.log('to get data')
    this.handleGetData()
  },
  watch: {
      '$route' (to, from) {
        console.log('change routes')
        this.handleGetData()
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="hello">
    <div>{{this.msg}}</div>
    <div @click = "alertMsg">alert</div>
    <div @click = "ajax">Ajax</div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
    },
    alertMsg (data) {
      Swal({
        html: data,
        showConfirmButton: false,
      })
      // Swal({
      //   html: "<form><input type='text'><br><input type='text'></form>",
      // })
      // Swal({
      //   title: 'Oops...',
      //   text: 'Something went wrong!',
      //   showConfirmButton: false,
      // })
    },
    ajax () {
      axios.get('https://www.easy-mock.com/mock/5aead18d44f4206ef1c42cfd/example/sweetalert2').then(res => {
          console.log(res.data.data.url)
        let content = res.data.data.url
        this.alertMsg(content)
        // this.alertMsg()
      })
    },
    handleClick () {
    console.log('father')
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

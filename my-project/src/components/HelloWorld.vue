<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span @click = "greet('hello vue!')">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'xianglin',
    }
  },
  methods:{
    greet: function (ele) {
      alert(ele)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
  color: coral;
}
</style>

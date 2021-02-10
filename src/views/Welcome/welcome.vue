<template>
  <div class="box">
    <img src="/imgs/cat.jpg" class="box-img">
    <h1>Myopia cat blog</h1>
    <h5>welcome</h5>
    <router-link tag="button" to="/home"><button>进入博客</button></router-link>
  </div>
</template>

<script>
export default {
name: "welcome"
}
</script>

<style scoped>
body{

}
.box{
  width: 450px;
  color: white;
  text-align: center;
  margin: 10px auto;
  font-family: "Century Gothic",sans-serif;
}
</style>
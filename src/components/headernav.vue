<template>
  <div id="headNav">
    <nav class="navbar">
      <span><i class="iconfont icon-subscriber-fill"></i></span>
      <span>Myopia cat blog</span>
      <ul class="navbar-nav">
        <router-link tag="li" to="/home"><span class="nav-link">主页</span></router-link>
        <router-link tag="li" to="/message"><span class="nav-link">留言</span></router-link>
        <router-link tag="li" to="/about"><span class="nav-link">关于</span></router-link>
        <li><span class="nav-link">搜索</span></li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/login"><span class="nav-link">登录</span></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "headNav",
}
</script>

<style scoped>
#headNav{
  position: sticky;
  top: 0;
  background: #1890ff;
  width: 100%;height: 80px;
  line-height: 80px;
  color: white;
}
.navbar {
  display: flex;
  width: 100%;
}
.navbar span{
  margin-right: 10px;
}
.navbar i{
  margin-left: 10px;
}
#headNav .navbar ul li span{
  position: relative;
}
#headNav .navbar ul li span:before{
  content: "";
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #b3d4fc;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: .5s;
}
#headNav .navbar ul li span:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}
#headNav .navbar ul li span:after{
  content: "";
  position: absolute;
  bottom: 18px;
  right: 0;
  width: 100%;
  height: 2px;
  background: #b3d4fc;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: .5s;
}
#headNav .navbar ul li span:hover:after{
  transform: scaleX(1);
  transform-origin: right;
}
#headNav .navbar ul li{
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
}
.navbar .icon-subscriber-fill{
  font-size: 50px;
}
.navbar > span {
  font-size: 1.5rem;
  display: inline-block;
  height: 100%;
}
.navbar  .navbar-nav {
  display: flex;
}
.navbar  .navbar-nav li{
  font-size: 24px;
}
.navbar  .navbar-nav .nav-link {
  display: inline-block;
  padding: 0 0.5125rem;
}
.ml-auto {
  margin-left: auto;
}

</style>
<template>
  <!-- 头部导航组件  -->
  <div id="headNav">
    <nav class="navbar">
      <!--  导航标题与图标    -->
      <span><i class="iconfont icon-subscriber-fill"></i></span>
      <router-link tag="span" to="/">Myopia cat blog</router-link>
      <ul class="navbar-nav">

        <!--   导航栏     -->
        <router-link tag="li" to="/home"><span class="nav-link">主页</span></router-link>
        <router-link tag="li" to="/message"><span class="nav-link">留言</span></router-link>
        <router-link tag="li" to="/about"><span class="nav-link">关于</span></router-link>
        <li><span class="nav-link">搜索</span></li>
      </ul>

          <!--    适配移动端的导航      -->
          <ol class="menu-btn" @click="showMenuItem">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>

          <!--    适配移动端的导航      -->
          <ol class="menu-list" v-show="isShow">
            <router-link tag="li" to="/login">登录</router-link>
            <router-link tag="li" to="/message">留言</router-link>
            <router-link tag="li" to="/about">关于</router-link>
          </ol>

      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/login"><span class="nav-link">登录</span></router-link>
      </ul>

    </nav>
  </div>
</template>

<script>
export default {
  name: "headNav",
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    showMenuItem(){
      this.isShow = !this.isShow;
    },
  }
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
  cursor: pointer;
}
.navbar i{
  margin-left: 10px;
}
#headNav .navbar ul li span{
  position: relative;
}
/*鼠标经过时触发上下两条线的样式*/
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
/*鼠标经过时触发上下两条线的样式*/
#headNav .navbar ul li span:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}
/*鼠标经过时触发上下两条线的样式*/
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
/*鼠标经过时触发上下两条线的样式*/
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



@media screen and (max-width: 660px) {
  #headNav ul{
    display: none;
  }
  .navbar span{
    font-size: 1.3rem;
  }

  #headNav .navbar .menu-btn{
    width: 50px;height: 50px;
    overflow: hidden;
    margin-left: 15px;

  }
  #headNav .navbar .menu-btn li {
    margin-top: 35px;
    margin-right: 2px;
    width: 10px;height: 10px;
    background: #b3d4fc;
    float: left;
    border-radius: 100%;
  }
  #headNav .navbar .menu-list li{
    height: 20px;
    margin-top: 8px;
  }
  .menu-list{
    position: absolute;
    width: 100%;
    height: 90px;
    z-index: 1000;
    left: 0;
    top: 70px;
    background: #1890ff;
    text-align: center;
    line-height: 10px;
  }

}
</style>
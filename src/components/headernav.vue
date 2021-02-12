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
        <div id="menuToggle">

          <input type="checkbox" class="menu-btn close" />

          <span></span>
          <span></span>
          <span></span>

          <ul class="menu close">
            <a href="#"><li>主页</li></a>
            <a href="#"><li>留言</li></a>
            <a href="#"><li>关于</li></a>
            <a href="#"><li>搜索</li></a>
          </ul>
        </div>
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

#menuToggle{
  display: none;
}

@media screen and (max-width: 660px) {
  #headNav ul {
    display: none;
  }

  #menuToggle {

    display: block;
    position: relative;
    top: 32px;
    left: 60px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: tomato;
  }


  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
   * But let's hide the middle one.
   */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
   * Ohyeah and the last one should go the other direction
   */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

}
</style>
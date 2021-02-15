<template>
  <div id="bg">
    <!-- 网站首页（启动页）   -->
    <div class="box">
      <img src="/imgs/cat.jpg" class="box-img">
      <h1>Myopia cat blog</h1>
      <h5>测试文本测试文本测试文本测试文本测试文本测试文本</h5>


      <!--  跳转QQ群以及进入博客    -->
      <ul>
        <li><i class="iconfont icon-QQ"></i></li>
        <li><i class="iconfont icon-github"></i></li>
        <router-link tag="li" to="/home"><i class="iconfont icon-ego-blog" title="来写篇文章吧"></i></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "welcome"
}
</script>

<style scoped>
#bg{
  position: fixed;
  width: 100vw;
  height: 100vh;
  left:0;
  top:0;
  background: url("/imgs/bg.jpg");
}
#bg .box{
  width: 50vw;
  color: white;
  text-align: center;
  margin: 8vw auto;
  font-family: "Century Gothic",sans-serif;
}
@media all and (min-width: 333px) and (max-width: 415px){
  #bg .box{
    width: 80vw;
    margin: 20vw auto;
  }
}

@media screen and (max-width: 330px) {
  #bg .box{
    width: 80vw;
    font-size: 12px;
  }
  #bg .box .box-img{
    width: 100px;height: 100px;
    border-radius: 100%;
  }
}

#bg .box .box-img{
  margin: 0 auto;
  border-radius: 50%;
  width: 250px;height: 250px;
}
#bg .box h1 {
  margin: 20px auto;
}
#bg .box h5{
  font-size: 20px;
  margin-bottom: 20px;
}
#bg .box ul li{
  display: inline-block;
}
#bg .box ul li i{
  margin: 0 20px;
  font-size: 60px;
  cursor: pointer;
}


</style>
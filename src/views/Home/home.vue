<template>
<!-- 网站主页 -->
  <div id="main">
<!--  顶部导航    -->
    <headernav></headernav>

<!--  博客  -->
    <div id="blog">
      <div class="blog-box">
        <div class="blog-page">
          <img src="@/assets/bg.jpg" alt="">
          <div class="blog-content">
            <h3>博客标题</h3>
            <p>测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
              测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本</p>
            <div class="blog-time">2021-02-12</div>
            <a href="/details"><p>阅读全文></p></a>
          </div>
        </div>

        <!--   第二篇博客    -->
        <div class="blog-page">
          <img src="@/assets/bg.jpg" alt="">
          <div class="blog-content">
            <h3>博客标题</h3>
            <p>测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
              测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本</p>
            <div class="blog-time">2021-02-12</div>
            <a href="/details"><p>阅读全文></p></a>
          </div>
        </div>
      </div>

      <!--  右侧登录信息    -->
      <div class="login">
        <img src="/imgs/bg.jpg" alt="">
        <div class="login-content">
          <i class="iconfont icon-subscriber-fill"></i>
          <span>未登录</span>
          <router-link tag="button" to="/login">登录</router-link>
        </div>
        <p>来写篇文章吧+</p>
      </div>
    </div>

    <!-- 页脚  -->
    <pageFooter></pageFooter>
  </div>
</template>

<script>
//导入页头页脚组件
import headernav from "@/components/headernav";
import pageFooter from "@/components/pageFooter";

export default {
  name: "home",
  components: {
    headernav,
    pageFooter,
  }
}
</script>

<style scoped>
#blog {
  margin: 10px auto;
  width: 70%;
  display: flex;
}

#blog .blog-box {
  width: 60%;
  padding: 5px;
  border-radius: 10px;
}

#blog .blog-box .blog-page {
  background: white;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
}

#blog .blog-box .blog-page img {
  width: 100%;
  height: 100%;
}

#blog .blog-box .blog-content {
  margin: 10px auto;
}

#blog .blog-box .blog-content h3 {
  border-bottom: 1px solid black;
  margin: 10px;
}

#blog .blog-box .blog-content p {
  color: gray;
  margin: 10px;
}

#blog .blog-box .blog-content button {
  margin-left: 10px;
  cursor: pointer;
  width: 80px;
  height: 30px;
}

#blog .blog-box .blog-content .blog-time {
  margin: 10px;
}

.login {
  padding-bottom: 10px;
  margin-left: 20px;
  margin-top: 10px;
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}

.login .login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 30%;
}

.login .login-content button {
  width: 150px;
  height: 30px;
  background: #1890ff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
}

.login .login-content i {
  font-size: 40px;
}

.login img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 850px) {
  #blog {
    margin: 10px auto;
    width: 90%;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 660px) {
  #blog {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  #blog .blog-box {
    width: 100%;
    margin: 0 auto;
  }

  #blog .login {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
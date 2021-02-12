<template>
  <div id="main">
    <headernav></headernav>
      <div id="blog">
          <div class="blog-box">
            <div class="blog-page">
              <img src="@/assets/bg.jpg" alt="">
              <div class="blog-content">
                <h3>博客标题</h3>
                <p>测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                  测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本</p>
                <div class="blog-time">2021-02-12</div>
                <button>阅读全文></button>
              </div>
            </div>

            <div class="blog-page">
              <img src="@/assets/bg.jpg" alt="">
              <div class="blog-content">
                <h3>博客标题</h3>
                 <p>测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
                 测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本</p>
                <div class="blog-time">2021-02-12</div>
                <button>阅读全文></button>
              </div>
            </div>

          </div>

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

    <pageFooter></pageFooter>
  </div>
</template>

<script>

import headernav from "@/components/headernav";
import pageFooter from "@/components/pageFooter";

export default {
  name: "home",
  components:{
    headernav,
    pageFooter
  }
}
</script>

<style scoped>
  #blog{
    margin: 10px auto;
    width: 70%;
    display: flex;
  }
  #blog .blog-box{
    width: 60%;
    padding: 5px;
    border-radius: 10px;
  }
  #blog .blog-box .blog-page{
    background: white;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 10px;
  }
  #blog .blog-box .blog-page img{
    width: 100%;height: 100%;
  }
  #blog .blog-box .blog-content{
    margin: 10px auto;
  }
  #blog .blog-box .blog-content h3{
    border-bottom: 1px solid black;
    margin: 10px;
  }
  #blog .blog-box .blog-content p{
    color: gray;
    margin: 10px;
  }
  #blog .blog-box .blog-content button{
    margin-left: 10px;
    cursor: pointer;
    width: 80px;height: 30px;
  }
  #blog .blog-box .blog-content .blog-time{
    margin: 10px;
  }

  .login{
    margin-left: 20px;
    margin-top: 10px;
    width: 50%;height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: white;
    border-radius: 10px;
  }
  .login .login-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;height: 30%;
  }
  .login .login-content button{
    width: 150px;height: 30px;
    background: #1890ff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  .login .login-content i{
    font-size: 40px;
  }
  .login img {
    width: 100%;height: 100%;
  }

  @media screen and (max-width: 850px){
    #blog{
      margin: 10px auto;
      width: 90%;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 660px) {
    #blog{
      width: 90%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
    #blog .blog-box{
      width: 100%;
      margin: 0 auto;
    }
    #blog .login{
      width: 100%;
      margin: 0 auto;
    }

  }
</style>
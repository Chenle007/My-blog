<template>
  <div id="main">
    <headernav></headernav>
    <div id="Content">
      <div class="leftContent">
        <div class="leftContent1">
          <img src="@/assets/blogcontent.jpg">
          <h2>博客标题</h2>
          <div class="blog-con">
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          </div>
          <div class="blog-time">2021-1-20</div>
          <button>查看全文 ></button>
        </div>
        <div class="leftContent2">
          <img src="@/assets/blogcontent.jpg" alt="">
          <h2>博客标题</h2>
          <div class="blog-con">
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
          </div>
          <div class="blog-time">2021-1-20</div>
          <button>查看全文 ></button>
        </div>
      </div>


      <div class="rightContent">
        这里放登录信息
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
#Content{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 70%;
  margin: 10px auto;
  border-radius: 10px;
}
#Content .leftContent .leftContent1{
  border: 1px black solid;
  margin: 10px;
  background: white;
  border-radius: 5px;
}
#Content .leftContent .leftContent1 img{width: 800px;height: 200px}
#Content .leftContent .leftContent2 img{width: 800px;height: 200px}
#Content .leftContent .leftContent2{
  border: 1px black solid;
  margin: 10px;
  background: white;
  border-radius: 5px;
}
#Content .leftContent h2{
  margin: 10px;
}
#Content .leftContent .blog-time{
  margin: 10px;
}
#Content .leftContent .blog-con{
  margin: 10px;
  border-bottom: 1px solid black;
  width: 800px;
}
#Content .leftContent button{
  width: 80px;height: 40px;
  background: #1890ff;
  color: white;
  border-radius: 5px;
  text-align: center;
  margin-left: 720px;
  margin-bottom: 10px;
  cursor: pointer;
}

#Content .rightContent{
  width: 400px;height: 400px;
  border:1px solid black;
  border-radius: 7px;
  background: white;
}

</style>
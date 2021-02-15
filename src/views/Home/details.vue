<template>
  <div id="main">
    <headernav></headernav>

    <!-- 博客详情页   -->
    <div class="details-content">

      <!--  返回按钮    -->
      <div class="back"><a href="/home">◀ back</a></div>

      <!--  文章内容    -->
      <div class="title">
        文章标题
      </div>
      <p class="time">发布于2021-02-12</p>
      <div class="details-con">
        测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
        测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
      </div>

      <!--  发表评论    -->
      <p class="comment">发表评论</p>
      <div class="comment-con">
        <textarea placeholder="请输入评论" maxlength="200"></textarea>
      </div>
      <div class="comment-btn">
        <div>😀</div>
        <input type="button" value=" 发布"/>
      </div>

      <!--  评论的内容    -->
      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>


      <!--  评论显示的地方    -->
      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>
      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>
    </div>

    <!-- 第二篇博客详情   -->
    <div class="details-content">
      <div class="title">
        文章标题
      </div>
      <p class="time">发布于2021-02-12</p>
      <div class="details-con">
        测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
        测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
      </div>
      <p class="comment">发表评论</p>
      <div class="comment-con">
        <textarea placeholder="请输入评论" maxlength="200"></textarea>
      </div>
      <div class="comment-btn">
        <div>😀</div>
        <input type="button" value=" 发布"/>
      </div>


      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>


      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>
      <div class="details-list">
        <div class="comment-items">
          这里是评论内容~
        </div>
        <div class="good">
          <span>👍</span>
          <span>1000+</span>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
/*导入页头页脚组件*/
import headernav from "@/components/headernav";
import pageFooter from "@/components/pageFooter";

export default {
  name: "details",
  components: {
    headernav,
    pageFooter,
  }
}
</script>

<style scoped>
.details-content {
  width: 70%;
  margin: 30px auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
}

@media screen and (max-width: 420px) {
  .details-content {
    width: 90%;
    margin: 20px auto;
    padding: 10px;
    background: white;
    border-radius: 10px;
  }
}

.details-content .title {
  font-size: 25px;
  height: 50px;
  border-bottom: 1px solid black;
  line-height: 50px;

}

.details-content .time {
  color: gray;
  margin-top: 10px;
}

.details-content .details-con {
  margin-top: 10px;
}

.details-content .comment {
  margin-top: 10px;
}

.details-content .comment-con {
  display: flex;

}

.details-content .comment-con textarea {
  width: 100%;
  resize: none; /*禁止文本框放大缩小*/
  height: 100px;
  margin-top: 5px;
  border-radius: 5px;
}

.details-content .comment-btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.details-content .comment-btn input {
  width: 80px;
  height: 25px;
  border-radius: 8px;
  border: none;
  background: #b3d4fc;
  cursor: pointer;
}

.details-content .details-list {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 50%;
}

.details-content .back a{
  font-size: 20px;
  cursor: pointer;
  color: black;
}
</style>
<template>
    <div id="bg">
      <div id="loginPage">
        <router-link tag="div" to="/home" class="back">⬅</router-link>
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">Login</li>
        <li @click="cur=1" :class="{active:cur==1}">Register</li>
      </ul>

      <div class="loginCon">
        <div v-show="cur==0" class="content">
          <div class="form-con"><input type="text" placeholder="Username"></div>
          <div class="form-con"><input type="password" placeholder="Password"></div>
          <div class="form-psd">
            <div><input type="checkbox"> 记住密码</div>
            <a href="#">忘记密码？</a>
          </div>

          <div class="form-btn">
            <button>登录</button>
          </div>
        </div>
      </div>


      <!--  注册    -->
      <div v-show="cur==1" class="loginCon">
        <div class="content">
          <div class="form-con"><input type="email" placeholder="email"></div>
          <div class="form-con"><input type="text" placeholder="Username"></div>
          <div class="form-con"><input type="password" placeholder="Password"></div>
          <div class="form-con"><input type="password" placeholder="确认密码"></div>
          <div class="form-btn">
          <button>注册</button>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>

export default {
  name: "login",
  data(){
    return {
      cur:0//默认第一个登录页
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
#bg{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left:0;
  top:0;
  background: url("/imgs/bg.jpg") no-repeat;
}

  #loginPage{
    border: 1px solid black;
    width: 500px;
    height: 400px;
    background-color:rgba(0,0,0,0.6);
    border-radius: 10px;
    padding: 20px 50px;
  }
  #loginPage .back{
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
  #loginPage ul{
    display: flex;
    justify-content: space-evenly;
    text-transform: uppercase;
    font-size: 35px;
    line-height: 50px;
  }
  #loginPage ul li{
    flex: 2;
    text-align: center;
    cursor: pointer;
    color: #33ccff;
    font-size: 22px;
  }
  #loginPage .loginCon{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #loginPage .loginCon .form-con{
    margin-top: 10px;
  }
  #loginPage .loginCon .form-psd{
    display: flex;
    justify-content: space-between;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }
  #loginPage .loginCon .form-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  #loginPage .loginCon .form-btn button{
    width: 70%;
    height: 30px;
    line-height: 30px;
    border-radius: 8px;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    cursor: pointer;
  }

  #loginPage .loginCon .form-con input{
    width: 100%;
    border: 0;
    padding: 6px;
    border-bottom: 1px solid white;
    background: #ffffff00;
    color: white;
    font-size: 18px;
  }

  #loginPage .registerCon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
  }

</style>
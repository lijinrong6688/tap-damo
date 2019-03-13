<template>
  <!--导航栏-->
  <div class="header">
    <div class="inner">
      <div class="logo">
        <a href="#"><img src="static/main/logo.png" alt=""></a>
      </div>
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/discover">发现</router-link>
        <router-link to="/games">游戏</router-link>
        <router-link to="/chat">论坛</router-link>
      </div>
      <div class="loginBtn" v-if="!isLogin">
        <router-link to="/login">登录</router-link>
      </div>
      <div class="user-info" v-if="isLogin">
        <img src="/static/chat/avater.jpg" class="avater"/>
        <span>欢迎您！ {{user}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *:after,
  *::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  /*导航栏*/
  .header {
    width: 100%;
    height: 80px;
    background-color: #fff;
  }

  .inner {
    width: 1040px;
    height: 80px;
    margin: 0 auto;
    position: relative;
  }

  .logo {
    width: 180px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -30px;
    /*overflow: hidden;*/
  }
  .logo a {
    display: block;
    width: 180px;
    height: 60px;
  }

  .logo a img {
    width: 100%;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  .logo a:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }

  .nav {
    position: absolute;
    top: 0;
    left: 180px;
  }

  nav a:hover,
  nav a:focus {
    outline: none;
  }

  .nav a {
    display: inline-block;
    margin: 25px 0 25px 60px;
    color: #573BA2;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    outline: none;
    padding: 0 0 10px;
  }

  .nav a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #CE2840;
    content: '';
    opacity: 0;
    -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  .nav a:hover::after,
  .nav a:focus::after {
    height: 4px;
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }

  .loginBtn {
    width: 90px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -20px;
  }

  .user-info{
    width: 150px;
    height: 80px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -20px;
  }

  .loginBtn a {
    display: block;
    width: 90px;
    height: 40px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #CE2840;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
  }
  .avater{
	height: 50px;
	width: 50px
  }
</style>
<script>
import bus from '../assets/eventBus';
    export default{
        data(){
          return {
            isLogin: false,
            user: null
          }
        },
        methods: {

        },
        created() {
          let that = this;
          bus.$on('logined', data => {
            that.isLogin = true;
            that.user = data[0];
          })
        },
    }
</script>


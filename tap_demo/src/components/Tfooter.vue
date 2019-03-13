<template>

  <!--footer-->
  
    <div class="footer">
        <div class="footer-inner">
            <a href="#"><img src="static/main/logo.png" alt=""></a>
        <div class="footer-nav">
            <a href="#">首页</a>
            <a href="#">发现</a>
            <a href="#">游戏</a>
            <a href="#">论坛</a>
        </div>
        <p>Discover Superb Games</p>
        <p>Copyright © 2018 快乐肥宅 All rights Reserved</p>
        <div class="contact">
            <h4>Contact us</h4>
            <div class="contact-list">
                <a href="#"><img src="static/footer/facebook.png" alt=""></a>
            <a href="#"><img src="static/footer/wechat.png" alt=""></a>
            <a href="#"><img src="static/footer/QQ.png" alt=""></a>
            <a href="#"><img src="static/footer/weibo.png" alt=""></a>
            <a href="#"><img src="static/footer/email.png" alt=""></a>
            </div>
            
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
  .footer {
      width: 100%;
      height: 180px;
      background: #fff;
      margin-top: 30px;
  }
  .footer-inner {
      width: 1040px;
      margin: 0 auto;
      position: relative;
  }
  .footer-inner > a {
      display: block;
      width: 100px;
      height: 33px;
      position: absolute;
      top: 40px;
      left: 0;
  }
  .footer-inner > a > img {
      width: 100px;
  }

  .footer-nav {
    position: absolute;
    top: 50px;
    left: 100px;
  }

  .footer-nav a {
    display: inline-block;
    margin-left: 20px;
    color: #573BA2;
    font-size: 14px;
    font-weight: narmal;
    position: relative;
    outline: none;
    padding: 0 0 10px;
  }
  .footer-inner p:first-of-type {
      font-size: 22px;
      color: #573BA2;
      position: absolute;
      top: 90px;
      left: 0;
  }
  .footer-inner p:last-of-type {
      font-size: 14px;
      color: #573BA2;
      position: absolute;
      top: 120px;
      left: 0;
  }
  .contact {
      position: absolute;
      top: 40px;
      right: 0;
  }
  .contact h4 {
      font-size: 14px;
      font-weight: normal;
      color: #573BA2;
      position: absolute;
      left: 2px;
      top: 0;
  }
  .contact-list{
      width: 250px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
  }
  .contact-list a {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
      overflow: hidden;
  }
  .contact-list a img{
      width: 100%;
  }
</style>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
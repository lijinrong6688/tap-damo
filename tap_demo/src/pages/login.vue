<template>
    <div class="loginPath">
        <div class="login">
            <div class="area clear">
                <div class="left"></div>
                <div class="right">
                    <h3>用户登陆</h3>
                    <form>
                        <div>
                            <input type="text" placeholder="账号" v-model="account">
                        </div>
                        <div>
                            <input type="password" placeholder="密码" v-model="pass">
                        </div>
                        <div class="other clear">
                            <span>
                                <input type="checkbox"><span style="padding-left: 5px">记住密码</span>
                            </span>
                            <span style="float:right">忘记密码?</span>
                        </div>
                        <div class="button">
                            <button @click="login()">登陆</button>
                            <span>立即注册</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import global_ from '../Global.vue'
import bus from '../assets/eventBus'
export default {
    data () {
        return {
            account: '',
            pass: ''
        }
    },
    methods: {
        login () {
            let that = this;
            let params = new URLSearchParams();
                params.append('username', that.account);
                params.append('password',that.pass);
            global_.instance.post('login', params, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(res => {
                if(res.data.code === 200){
                    bus.$emit('logined', [res.data.user])
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
.loginPath{
    height: 100vh;
}
.login{
    width: 100%;
    height: calc(100% - 80px);
    background-image: url(/static/login/loginBg.png);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 40px 0;
}
.area{
    width: 870px;
    height: 510px;
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 30px;
    box-sizing: border-box;
}
.clear:after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
}
.area>div{
    width: 49%;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    float: left;
}
.area .left{
    background-image: url(/static/login/login.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-right: 1.5%;
}
.right{
    padding: 15px 0;
}
.right form{
    padding: 25px 45px 10px;
}
.right form>div{
    padding: 13px 0;
}
.right form input[type="text"],.right form input[type="password"]{
    outline: none;
    line-height: 50px;
    height: 50px;
    width: 300px;
    border-radius: 25px;
    border: 2px solid #aaa;
    padding: 0 10px;
}
.right .other>span{
    float: left;
}
.right .button{
    padding: 30px 0 0;
}
.button button{
    width: 100%;
    height: 50px;
    background-color: #CE2840;
    border-radius: 25px;
    outline: none;
    border: 1px solid #aaa;
    color: #fff;
}
</style>

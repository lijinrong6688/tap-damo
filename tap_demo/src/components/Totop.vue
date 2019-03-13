<template>

  <!--返回顶部-->
  
    <div class="toTop" id="toTop" @click="toTop()">
        <p>顶部</p>
        <img src="static/totop/totop.png" alt="">
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
  /*返回顶部*/
.toTop {
    width: 50px;
    height: 100px;
    position: fixed;
    bottom: 0;
    right: 0;
    cursor: pointer;
}

.toTop p {
    font-size: 12px;
    color: #573BA2;
    text-align: center;
}

.toTop img {
    width: 50px;
}

</style>
<script>
    export default{
        data(){
            return {

            }
        },
        methods:{
            toTop(){
            var t = setInterval(function () {
            var scrolly = window.scrollY; //获取滚动条滚动的距离
            var speed = scrolly / 15;
            var target = scrolly - speed;
            if (scrolly <= 20) {
                target = 0;
                clearInterval(t);
            }
            window.scrollTo(0, target);
            }, 10);
        },
        // created() {
        //     console.log(2);
        //     var toTop = document.getElementById("toTop");
        //     window.onscroll = function () {
        //         var s = window.scrollY
        //         if (s > 500) {
        //             toTop.style.display = "block";
        //         } else {
        //             toTop.style.display = "none";
        //         }
        //         console.log(1);
        //     }
        // },
    }
    }
    
</script>
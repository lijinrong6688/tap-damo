<template>
  <div id="index">
    <!--<div v-for="item in carousel" :key="item.id">-->
    <!--<img :src="domain+item.filePath" alt="">-->
    <!--</div>-->

    <!--轮播图-->
    <div class="lunBo">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in carousel" :key="item.id">
          <img :src="domain+item.filePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--main-->
    <div class="main">
      <div class="listBox" v-for="(item, index) in banner" :key="index">
        <div class="listBox-hd">
          <a href="#"><img :src="domain + item.avatar" alt=""></a>
          <span>{{item.type}}</span>
        </div>
        <div class="listBox-bd">
          <a href="#" class="bd-title">{{item.title}}</a>
          <a href="#" class="bd-img"><img :src="domain + item.img" alt=""></a>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global_ from '../Global.vue'
  export default {
    name: 'index',
    data() {
      return {
        domain: global_.domain,
        carousel: [],
        banner: []
      }
    },
    mounted() {
      let that = this;
      global_.instance.get('carousel').then(res => {
        this.carousel = res.data.carousel;
      })
      global_.instance.get('banner').then(res => {
        this.banner = res.data.banner;
      })
    },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
/*轮播图*/
  .lunBo {
    width: 100%;
    height: 450px;
  }

  .lunBo img {
    width: 100%;
  }

  /*main*/
  .main {
    width: 1040px;
    margin: 20px auto;
  }
  .listBox {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
  }
  .listBox-hd {
    padding: 20px 0 10px 20px;
    text-align: left;
  }
  .listBox-hd a img {
    width: 20px;
    height: 20px;
    border: none;
    vertical-align: middle;
  }
  .listBox-hd span {
    height: 30px;
    color: #999;
    font-size: 12px;
    padding-left: 10px;
    vertical-align: middle;
  }
  .listBox-bd {
    width: 100%;
  }
  .listBox-bd .bd-title {
    display: block;
    padding: 0 0 10px 20px;
  }
  .listBox-bd a {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #666;
    text-align: left;
    text-decoration: none;
  }
  .listBox-bd .bd-img {
    display: block;
    width: 1040px;
    height: 414px;
    overflow: hidden;
  }

  .listBox-bd a img {
    width: 100%;
  }
  .listBox-bd p {
    font-size: 16px;
    color: #999;
    text-align: left;
    padding: 10px 20px 20px;
  }

</style>

<template>
  <div id="discover">
    <div class="dis-img">
      <a href="#"><img src="static/discover/fangzhou.png" alt=""></a>
    </div>
    <div class="item" v-for="(item,index) in discoverList" :key="index">
      <div class="app-item-title">
        <h3>{{item.type}}</h3>
        <a href="#">更多</a>
      </div>
      <div class="app-item-list">
        <div class="app-item" v-for="(sub,i) in item.games" :key="i">
          <img :src="domain+sub.filePath"/>
          <div class="app-item-caption">
            <div class="item-caption-icon">
              <a href="#">{{sub.title}}</a>
            </div>
            <div class="item-caption-label">
              <a href="#">卡牌</a>
              <span class="score">9.9 ★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global_ from '../Global.vue'
  export default {
    name: 'discover',
    data() {
      return {
        domain: global_.domain,
        discoverList: []
      }
    },
    mounted() {
      let that = this;
      global_.instance.get('discover').then(res => {
        that.discoverList = res.data.result;
      })
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .dis-img {
    width: 100%;
    height: 450px;
    overflow: hidden;
  }

  .dis-img a {
    display: block;
    width: 100%;
    height: 450px;
  }

  .dis-img a img {
    width: 100%;
  }

  .item {
    width: 1040px;
    margin: 0 auto;
  }

  .app-item-title {
    width: 1040px;
    height: 40px;
    border-bottom: 1px solid #ccc;
    margin-top: 40px;
    position: relative;
  }

  .app-item-title h3 {
    text-align: left;
    color: #666;
    font-size: 24px;
    font-weight: bold;
    border-left: 4px solid #CE2840;
    padding-left: 8px;
  }

  .app-item-title a {
    position: absolute;
    top: 5px;
    right: 0;
    color: #CE2840;
    text-decoration: none;
    font-size: 16px;
  }

  .app-item-list {
    width: 1040px;
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 20px;
  }

  .app-item {
    width: 160px;
    height: 220px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .app-item img {
    width: 126px;
    height: 126px;
    display: block;
    margin: 17px auto 0;
  }

  .app-item-caption {
    width: 126px;
    margin: 10px auto 0;
  }
  .item-caption-icon {
    text-align: left;
  }

  .item-caption-icon a {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: #666;
  }

  .item-caption-icon a:hover {
    text-decoration: underline;
    color: #666;
  }

  .item-caption-label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .item-caption-label a {
    display: block;
    color: #666;
    text-decoration: none;
    font-size: 14px;
  }

  .item-caption-label a:hover {
    text-decoration: underline;
    color: #666;
  }

  .item-caption-label .score {
    display: block;
    color: #999;
    font-size: 14px;
  }
</style>

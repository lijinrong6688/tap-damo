<template>
  <div id="games">
  <div class="game-list">
  <div class="list-item">
    <img src="static/games/game1.png" alt="">
    <h3>跃动篮球</h3>
    <p>准备好投球了吗？快拿起球来灌篮吧！<br>
      跃动篮球是一款老少咸宜的热门电子游戏！投篮，解锁新的篮球，快来成为下一个篮球巨星把！<br>
      快来加入吧，和小伙伴们一同享受无尽模式的篮球运动！</p>
    <a href="http://10.3.141.20:8888?game=dunkshot" target="_blank">开始游戏</a>
  </div>
  <div class="list-item">
    <img src="static/games/game2.jpg" alt="">
    <h3>2048最火六角消除</h3>
    <p>2048六角消除是一款采用了独特六向消除法的消消乐游戏！轻松休闲的挑战模式，各种意想不到的乐趣玩法，诸多关卡海量挑战等你来尝试！还有更多乐趣等待你的挖掘！<br>
比2048还要好玩的消除游戏<br>
烧脑的关卡需要充分开动脑筋<br>
分数越高难度越来越大</p>
    <a href="http://10.3.141.20:8888?game=hex" target="_blank">开始游戏</a>
  </div>
  <div class="list-item">
    <img src="static/games/game3.jpg" alt="">
    <h3>你没见过的俄罗斯方块</h3>
    <p>《俄罗斯方块》（Tetris， 俄文：Тетрис）是一款由俄罗斯人阿列克谢·帕基特诺夫于1984年6月发明的休闲游戏。<br>
    由小方块组成的不同形状的板块陆续从屏幕上方落下来，玩家通过调整板块的位置和方向，使它们在屏幕底部拼出完整的一条或几条。这些完整的横条会随即消失，给新落下来的板块腾出空间，与此同时，玩家得到分数奖励。没有被消除掉的方块不断堆积起来，一旦堆到屏幕顶端，玩家便告输，游戏结束。</p>
    <a href="http://10.3.141.20:8888?game=russianBlock" target="_blank">开始游戏</a>
  </div>
  </div>
  </div>
</template>

<script>
import global_ from '../Global.vue'
export default {
  name: 'games'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.game-list {
  width: 1040px;
  margin: 0 auto;
}
.list-item {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
}
.list-item img {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50px;
  margin: 20px;
}
.list-item h3 {
  font-size: 20px;
  color: #666;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 200px;
}
.list-item p {
  width: 600px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
  color: #999;
  position: absolute;
  top: 60px;
  left: 200px;
}
.list-item a {
  display: block;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: #CE2840;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -25px;
}
.list-item a:hover {
  text-decoration: none;
}
</style>

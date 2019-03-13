<template>
  	<div id="chat">
		<div class="box" v-if="!isChat">
			<div class="box1" v-for="item in chatGroup" :key="item.id" @click="chooseChatGroup(item.id)">
				<div class="join">
					<p class="name">{{item.title}}</p>
					<p class="introduce">{{item.tip}}</p>
				</div>
				<div class="photo">
					<img :src="item.img" />
				</div>
			</div>
		</div>
		<div class="container" v-if="isChat">
			<div class="row">
				<div class="col-sm-9">
					<div class="talk_con">
						<div class="talk_show">
							<div class="atalk" v-for="(item,index) in chatMessage" :key="index">
								<!-- <img :src="item.avater" /> -->
								<img src="/static/chat/avater.jpg" class="avater"/>
								<p class="user-name">{{item.username}}</p>
								<span>{{item.content}}</span>
							</div>
						</div>
						<div class="talk_input">
							<input type="text" class="talk_word" v-model="sendMessage">
							<input type="button" value="发送" class="talk_sub" @click="send()">
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<p class="title">在线成员</p>
					<hr />
					<div class="userimg" v-for="(item,index) in onlineUsers" :key="index">
						<img src="/static/chat/avater.jpg" class="avater"/>
						<span>{{item.username}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import global_ from '../Global.vue'
import bus from '../assets/eventBus';
export default {
  name: 'chat',
  	data() {
		return {
			chatGroup: [
				{id: 1, title: '俄罗斯方块尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic1.jpg'},
				{id: 2, title: 'qq炫舞尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic2.jpg'},
				{id: 3, title: 'dnf尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic3.jpg'},
				{id: 4, title: 'cf尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic4.jpg'},
				{id: 5, title: 'qq飞车尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic5.jpg'},
				{id:6, title: '王者荣耀尬聊群', tip: '打了三千把没上过王者', img: './static/chat/pic6.jpg'},
			],
			isChat: false,
			sendMessage: '',
			avater: '',
			username: '愣头青',
			onlineUsers: [],
			socket: null,
			room: null,
			chatMessage: []
		}
	},
	methods: {
		chooseChatGroup: function(id){
			let that = this;
			that.isChat = true;
			that.room = id;
			let socket = io(global_.domain);
			that.socket = socket;
			socket.emit('join', {room: id, avater: that.avater, username: that.username});
			socket.on('joined', data => {
				that.onlineUsers = data;
				console.log(data);
			});
			socket.on('leave', data => {
				that.onlineUsers = data;
			});

			socket.on('recieveChat', data => {
				that.chatMessage.push(data);
			})
		},
		send: function(){
			let that = this;
			let socket = this.socket;
			socket.emit('chat', {room: that.room, avater: that.avater, username: that.username, content: that.sendMessage});
			that.sendMessage = '';
		}
	},
	mounted() {
		let that = this;
		bus.$on('logined', data => {
			that.username = data[0];
		})
	},
}
</script>
<style scoped>
.box2{
	width: 1366px;
	height: 80px;
	text-align: center;
	overflow: hidden;
	
}

/*游戏框*/
.box{
	width: 1040px;
	margin: 10px auto 0;
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height:100vh;
}
.box1{
	width: 30%;
	height: 380px;
	position: relative;
	text-align: center;
	border: 0.5px solid #beb4c7;
    background: #fff;
    margin: 20px 5px 15px 15px ;
    padding: 0 15px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #d7d6d8;
    float: left;
}
.join{
	position: absolute;
	width: 300px;
	height: 50px;
}
.name{
	text-align: left;
	margin: 20px 10px 0;
	font-size:1em;
}
.introduce{
	text-align: left;
	margin: 5px 10px;
	font-size: 0.8em;
	color:darkgray ;
}
.join img{
	position: absolute;
	height: 35px;
	left: 5px;
	top: 10px;
}
.join input{  
	display: block;
	width: 60px;
	height: 30px;
	outline: none;
	border-radius: 15px;
	background: #ce2840;
	position: absolute;
	top: 15px;
	right: 10px;
	text-align: center;
	
}
.photo{
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 300px;
	bottom: 10px;
	left: 0px;
}
.photo img{
	display: block;
	width: 100%;
	height: 300px;
}


.talk_con {
width:100%;
height: 500px;				
margin: 0px auto 0;
background: #f9f9f9;
}

.talk_show {
width: 100%;
height: 496px;
/*border: 1px solid #666;
background: #fff;*/
margin: 10px auto 0;
overflow: auto;
}

.talk_input {
width: 96%;
margin: 10px auto 0;
height: 48px;
background:white;
border-radius: 14px;
border:1px solid #D2D2D2;

}

.whotalk {
width: 80px;
height: 30px;
float: left;
outline: none;
}

.talk_word {
width: 90%;
height: 40px;
margin: 3px 0 0 5px;
border:none;
float: left;								
outline: none;
text-indent: 10px;
}

.talk_sub {
width: 40px;
background:#2f7ffc;
/* background: url(img/2.png) no-repeat #2f7ffc 8px;				 */
border:none;
color:white;
height: 40px;
float: left;
margin: 3px 36px 0 0px;
border-radius: 5px;
}

.atalk {
margin: 12px 50px;
text-align: left
}

.atalk span {
display: inline-block;
padding-left: 10px;
background: #FFFFFF;
border-radius: 10px;
color: black;
padding: 13px 10px;
margin-left: 10px;
}

.btalk {
margin: 12px;
text-align: right;
}

.btalk span {
display: inline-block;
padding-left: 10px;
background: #2f7ffc;
border-radius: 10px;
color: #fff;
padding: 13px 10px;
margin-right: 10px;
}

body {
background: #dfecfc;
}

.col-sm-3 {
background: #FFFFFF;
height: 572px;
border: 1px solid #d2d2d2;
border-radius: 14px;
}

.title {
height: 50px;
font-size: 16px;
line-height: 50px;
padding-top: 15px;
}

.userimg {
	height: 56px;
}
.user-name{
	display: inline-block; 
	font-size: 12px;
}
.avater{
	height: 50px;
	width: 50px
}

.userimg span {
padding-left: 10px;
}
</style>

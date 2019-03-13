import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chat from '@/pages/chat'
import games from '@/pages/games'
import discover from '@/pages/discover'
import main from '@/pages/main'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/games',
      name: 'games',
      component: games
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

<template>
  <div id="app">
    <Theader></Theader>
    <router-view/>
    <Tfooter></Tfooter>
    <Totop></Totop>
  </div>
</template>

<script>
import Theader from '@/components/Theader'
import Tfooter from '@/components/Tfooter'
import Totop from '@/components/Totop'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    Theader,
    Tfooter,
    Totop
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family:  sans-serif, 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eeeeee;
  /*width: 1366px;*/
}
</style>

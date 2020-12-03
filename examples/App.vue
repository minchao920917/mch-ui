<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <btns></btns>
    </div>
    </div>
  </div>
</template>

<script>

import btns from "./components/btns/btn"

export default {
  name: 'App',
  data(){
    return {
      count:0
    }
  },
  components:{
      btns
  },
  methods:{
    changeCount(){
      console.log(this);
      this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

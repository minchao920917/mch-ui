<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <!-- <btns></btns> -->
      <layout></layout>
      <!-- <icons></icons> -->
    </div>
    </div>
  </div>
</template>

<script>

// import btns from "./components/btns/btn"
import layout from "./components/btns/layout"
// import icons from "./components/btns/icons"

export default {
  name: 'App',
  data(){
    return {
      count:0
    }
  },
  components:{
      // btns,
      layout
      // icons

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

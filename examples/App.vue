<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <!-- <btns></btns> -->
      <!-- <layout></layout> -->
      <!-- <icons></icons> -->
      <!-- <loading></loading> -->
      <!-- <formTest></formTest> -->
      <dialogTest></dialogTest>
    </div>
    </div>
  </div>
</template>

<script>
// import loading from './components/btns/loading.vue';
// import FormTest from './components/formTest/formTest.vue';
import dialogTest from './components/dialog/dialogTest';

// import btns from "./components/btns/btn"
// import layout from "./components/btns/layout"
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
      // loading,
      // layout
      // icons
      // FormTest
      dialogTest

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

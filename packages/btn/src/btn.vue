<!--bnt.vue-->
<template>
  <span class="mch-btn">
      <slot></slot>  
  </span>
</template>

<script>
export default {
  name: 'McBtn', // 这个名字很重要
}
</script>

<style lang="scss" scoped>
.mch-btn {
  display: inline-block;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 4px;
  font-size: 4px;
  text-align: center;
  background: #09aeaf;
  color: white;
  cursor: pointer;
}

/*
* Button Sizes
*
* This file creates the various button sizes
* (ex. .button-large, .button-small, etc.)
*/
.button-giant {
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  padding: 0 70px; }

.button-jumbo {
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding: 0 60px; }

.button-large {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding: 0 50px; }

.button-normal {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 40px; }

.button-small {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 30px; }

.button-tiny {
  font-size: 9.6px;
  height: 24px;
  line-height: 24px;
  padding: 0 24px; }
</style>

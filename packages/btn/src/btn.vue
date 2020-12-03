<!--bnt.vue-->
<template>
  <span class="mc-btn"
    :class="[
      'mc-'+size+'-btn',
      'mc-'+type+'-btn',
      'mc-'+sharpe+'-btn'
    ]"
  ><slot></slot></span>
</template>

<script>
export default {
  name: 'McBtn', // 这个名字很重要
  props:{
    size:{
      type:String,
      default:"normal"
    },
    type:{
      type:String,
      default:"primary"
    },
    sharpe:{
      type:String,
      default:"square"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../scss/global.scss";
.mc-btn {
  display: inline-block;
  text-align: center;
  background: $default;
  cursor: pointer;
}

/*
* Button Colors 
*/
.mc-primary-btn{
  background: $primary;
}
.mc-success-btn{
  background: $success;
}
.mc-info-btn{
  background: $info;
}
.mc-warning-btn{
  background: $warning;
}
.mc-danger-btn{
  background: $danger;
}

/*
* Button Sizes 
*/
.mc-giant-btn {//巨大
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  padding: 0 70px; }

.mc-jumbo-btn {//特大
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding: 0 60px; }

.mc-large-btn {//大
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding: 0 50px; }

.mc-normal-btn {//正常尺寸
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 40px; }

.mc-small-btn {//小的
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 30px; }

.mc-tiny-btn {//微小的
  font-size: 9.6px;
  height: 24px;
  line-height: 24px;
  padding: 0 24px; }

/*
* Button Sharpes
*/
.mc-quare-btn {
  border-radius: 0; }

.mc-box-btn {
  border-radius: 10px; }

.mc-rounded-btn {
  border-radius: 4px; }

.mc-pill-btn {
  border-radius: 200px; }

.mc-circle-btn {
  border-radius: 100%; }

</style>

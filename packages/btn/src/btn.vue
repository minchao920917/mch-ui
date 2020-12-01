<!--bnt.vue-->
<template>
  <span class="mch-btn">
      <slot></slot>  
  </span>
</template>

<script>
export default {
  name: 'McBtn', // 这个名字很重要
  data () {
    return {
      
    }
  },
  methods: {
  }
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
</style>

<template>
  <div class="mc-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "McContainer",
};
</script>

<style lang="scss" scoped>
/* 栅栏布局 */
.mc-container {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.mc-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
  border: 0 solid #e5e5e5;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
</style>

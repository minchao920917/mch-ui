<template>
  <div class="mc-row">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'McRow'
}
</script>

<style lang="scss" scoped>
.mc-row:after {
	content: "";
	display: table;
	clear: both
}
</style>
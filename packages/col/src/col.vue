<template>
  <div
  class="mc-col"
    :class="[
      !!span ? 'mc-col-' + span:'',
      !!offset ? 'mc-offset-' + offset:'',
      ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"McCol",
    props:{
		span: {
      type: Number,
    },
    offset: {
      type: Number,
    },
	}
}
</script>

<style lang="scss" scoped>
.mc-col {
	float: left;
	box-sizing: border-box;
	width: 0
}

.mc-col-1 {
	width: 4.16667%
}

.mc-offset-1 {
	margin-left: 4.16667%
}

.mc-col-2 {
	width: 8.33333%
}

.mc-offset-2 {
	margin-left: 8.33333%
}

.mc-col-3 {
	width: 12.5%
}

.mc-offset-3 {
	margin-left: 12.5%
}

.mc-col-4 {
	width: 16.66667%
}

.mc-offset-4 {
	margin-left: 16.66667%
}

.mc-col-5 {
	width: 20.83333%
}

.mc-offset-5 {
	margin-left: 20.83333%
}

.mc-col-6 {
	width: 25%
}

.mc-offset-6 {
	margin-left: 25%
}

.mc-col-7 {
	width: 29.16667%
}

.mc-offset-7 {
	margin-left: 29.16667%
}

.mc-col-8 {
	width: 33.33333%
}

.mc-offset-8 {
	margin-left: 33.33333%
}

.mc-col-9 {
	width: 37.5%
}

.mc-offset-9 {
	margin-left: 37.5%
}

.mc-col-10 {
	width: 41.66667%
}

.mc-offset-10 {
	margin-left: 41.66667%
}

.mc-col-11 {
	width: 45.83333%
}

.mc-offset-11 {
	margin-left: 45.83333%
}

.mc-col-12 {
	width: 50%
}

.mc-offset-12 {
	margin-left: 50%
}

.mc-col-13 {
	width: 54.16667%
}

.mc-offset-13 {
	margin-left: 54.16667%
}

.mc-col-14 {
	width: 58.33333%
}

.mc-offset-14 {
	margin-left: 58.33333%
}

.mc-col-15 {
	width: 62.5%
}

.mc-offset-15 {
	margin-left: 62.5%
}

.mc-col-16 {
	width: 66.66667%
}

.mc-offset-16 {
	margin-left: 66.66667%
}

.mc-col-17 {
	width: 70.83333%
}

.mc-offset-17 {
	margin-left: 70.83333%
}

.mc-col-18 {
	width: 75%
}

.mc-offset-18 {
	margin-left: 75%
}

.mc-col-19 {
	width: 79.16667%
}

.mc-offset-19 {
	margin-left: 79.16667%
}

.mc-col-20 {
	width: 83.33333%
}

.mc-offset-20 {
	margin-left: 83.33333%
}

.mc-col-21 {
	width: 87.5%
}

.mc-offset-21 {
	margin-left: 87.5%
}

.mc-col-22 {
	width: 91.66667%
}

.mc-offset-22 {
	margin-left: 91.66667%
}

.mc-col-23 {
	width: 95.83333%
}

.mc-offset-23 {
	margin-left: 95.83333%
}

.mc-col-24 {
	width: 100%
}

.mc-offset-24 {
	margin-left: 100%
}
</style>
<template>
  <div
    class="mc-item"
    :class="[
      'mc-item-' + alignSelf
    ]"
    :style="itemStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'McItem',
  data() {
    return {
      itemStyle: {
        order: this.order,
        flexGrow: this.grow,
        flexShrink: this.shrink,
        flexBasis: this.basis,
      },
    };
  },
  props: {
    //order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    order: {
      type: Number,
      default: 0,
    },
    //flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    grow: {
      type: Number,
      default: 0,
    },
    //flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    shrink: {
      type: Number,
      default: 1,
    },
    //flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    basis: {
      type: String,
      default: 'auto',
    },
    /**
     * align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
     * auto | flex-start | flex-end | center | baseline | stretch;
     */
    alignSelf: {
      type: String,
      default: 'auto',
    },
  },
};
</script>

<style lang="scss" scoped>
.mc-item {
}

/*
*   align-self
*/
.mc-item-auto{
    align-self:auto;
}
.mc-item-flex-start {
    align-self:flex-start ;
}
.mc-item-flex-end{
    align-self:flex-end;
}
.mc-item-center{
    align-self:center;
}
.mc-item-baseline{
    align-self:baseline;
}
.mc-item-stretch{
    align-self:stretch;
}
</style>
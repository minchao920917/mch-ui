<template>
  <div
    class="mc-flex"
    :class="[
      'mc-flex-direction-' + direction,
      'mc-flex-wrap-' + wrap,
      'mc-flex-justify-' + justify,
      'mc-flex-items-' + alignItems,
      'mc-flex-content-' + alignContent,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "McFlex",
  props: {
    /**
     * flex-direction属性决定主轴的方向（即项目的排列方向）
     * 可选值：row | row-reverse | column | column-reverse;
     */
    direction: {
      type: "String",
      defalut: "row",
    },
    /**
     * 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
     * 可选值：nowrap | wrap | wrap-reverse;
     */
    wrap: {
      type: "String",
      defalut: "nowrap",
    },
    /**
     * justify-content属性定义了项目在主轴上的对齐方式。
     * 可选值：flex-start | flex-end | center | space-between | space-around
     */
    justify: {
      type: "String",
      defalut: "flex-start",
    },
    /**
     * align-items属性定义项目在交叉轴上如何对齐
     * 可选值：flex-start | flex-end | center | baseline | stretch;
     */
    alignItems: {
      type: "String",
      defalut: "flex-start",
    },
    /**
     * align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
     * 可选值：flex-start | flex-end | center | space-between | space-around | stretch;
     */
    alignContent: {
      type: "String",
      defalut: "flex-start",
    },
  },
};
</script>

<style lang="scss" scoped>
.mc-flex {
  display: flex;
}
/**
*  flex-direction
*/
.mc-flex-direction-row {
  flex-direction: row;
}
.mc-flex-direction-row-reverse {
  flex-direction: row-reverse;
}
.mc-flex-direction-column {
  flex-direction: column;
}
.mc-flex-direction-column-reverse {
  flex-direction: column-reverse;
}

/**
*  flex-wrap
*/
.mc-flex-wrap-nowrap {
  flex-wrap: nowrap;
}
.mc-flex-wrap-wrap {
  flex-wrap: wrap;
}
.mc-flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/**
*  justify-content
*/
.mc-flex-justify-flex-start {
  justify-content: flex-start;
}
.mc-flex-justify-flex-end {
  justify-content: flex-end;
}
.mc-flex-justify-center {
  justify-content: center;
}
.mc-flex-justify-space-between {
  justify-content: space-between;
}
.mc-flex-justify-space-around {
  justify-content: space-around;
}

/** 
* align-items
*/
.mc-flex-items-flex-start {
  align-items: flex-start;
}
.mc-flex-items-flex-end {
  align-items: flex-end;
}
.mc-flex-items-center {
  align-items: center;
}
.mc-flex-items-baseline {
  align-items: baseline;
}
.mc-flex-items-stretch {
  align-items: stretch;
}

/**
*  align-content
*/
.mc-flex-content-flex-start{
    align-content:flex-start;
}
.mc-flex-content-flex-end{
    align-content:flex-end;
}
.mc-flex-content-center{
    align-content:center;
}
.mc-flex-content-space-between{
    align-content:space-between;
}
.mc-flex-content-space-around{
    align-content:space-around;
}
.mc-flex-content-stretch{
    align-content:stretch;
}
</style>
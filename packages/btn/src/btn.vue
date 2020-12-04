<!--bnt.vue-->
<template>
  <span
    class="mc-btn"
    :class="[
      'mc-' + size + '-btn',
      'mc-' + type + '-btn',
      'mc-' + sharpe + '-btn',
      isdisabled?'is-disabled':''
    ]"
    ><slot></slot
  ></span>
</template>

<script>
export default {
  name: "McBtn", // 这个名字很重要
  props: {
    size: {
      type: String,
      default: "normal",
    },
    type: {
      type: String,
      default: "primary",
    },
    sharpe: {
      type: String,
      default: "square",
    },
    isdisabled:{
      type:Boolean,
      default:false
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./../../scss/global.scss";
.mc-btn {
  display: inline-block;
  text-align: center;
  background: $default;
  cursor: pointer;
  border-color: #eee;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  text-decoration: none;
  appearance: none;
  border: none;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
}

/*
* Button Colors 
*/
.mc-primary-btn {
  background: $primary;
}
.mc-success-btn {
  background: $success;
}
.mc-info-btn {
  background: $info;
}
.mc-warning-btn {
  background: $warning;
}
.mc-danger-btn {
  background: $danger;
}

/*
* Button Sizes 
*/
.mc-giant-btn {
  //巨大
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  padding: 0 70px;
}

.mc-jumbo-btn {
  //特大
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  padding: 0 60px;
}

.mc-large-btn {
  //大
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding: 0 50px;
}

.mc-normal-btn {
  //正常尺寸
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
}

.mc-small-btn {
  //小的
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 30px;
}

.mc-tiny-btn {
  //微小的
  font-size: 9.6px;
  height: 24px;
  line-height: 24px;
  padding: 0 24px;
}

/*
* Button Sharpe
*/
.mc-quare-btn {
  border-radius: 0;
}

.mc-box-btn {
  border-radius: 10px;
}

.mc-rounded-btn {
  border-radius: 4px;
}

.mc-pill-btn {
  border-radius: 200px;
}

.mc-circle-btn {
  border-radius: 100%;
}

/*
  * Button hover
  */
.mc-primary-btn:hover {
  background: rgba(13, 224, 224, 0.9);
}
.mc-success-btn:hover {
  background: rgba(92, 184, 92, 0.9);
}
.mc-info-btn:hover {
  background: rgba(51, 122, 183, 0.9);
}
.mc-warning-btn:hover {
  background: rgba(240, 173, 78, 0.9);
}
.mc-danger-btn:hover {
  background: rgba(217, 83, 79, 0.9);
}

.mc-primary-btn:hover,
.mc-success-btn:hover,
.mc-info-btn:hover,
.mc-warning-btn:hover,
.mc-danger-btn:hover {
  color: $white;
}

/*
* Button  Disabled
*/
.mc-btn:disabled,
.mc-btn.is-disabled {
  top: 0 !important;
  border: 1px solid #ddd !important;
  text-shadow: 0 1px 1px white !important;
  color: #ccc !important;
  cursor: not-allowed !important;
  appearance: none !important;
  box-shadow: none !important;
  opacity: 0.8 !important;
}
.mc-primary-btn.is-disabled {
  background: $primary !important;
}
.mc-success-btn.is-disabled {
  background: $success !important;
}
.mc-info-btn.is-disabled {
  background: $info !important;
}
.mc-warning-btn.is-disabled {
  background:$warning !important;
}
.mc-danger-btn.is-disabled {
  background: $danger !important;
}
</style>

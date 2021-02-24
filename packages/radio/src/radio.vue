<template>
  <label
    class="mc-radio"
    :class="{ 'is-checked': label === model, 'is-disabled': isDisabled }"
  >
    <span class="mc-radio__input">
      <span class="mc-radio__inner"></span>
      <!--真实的radio，被隐藏，去掉.mc-radio__original可以看到-->
      <input
        v-model="model"
        :name="name"
        :value="label"
        class="mc-radio__original"
        type="radio"
        :disabled="isDisabled"
      />
    </span>
    <span class="mc-radio__label">
      <slot></slot>
      <!--如果没传内容，就用label的值-->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "McRadio",
  //=====新增inject========//
  inject: {
    radioGroup: {
      default: "",
    },
  },
  computed: {
    //============需改造的部分============//
    model: {
      get() {
        //如果有group包裹，就返回group上面的v-model值，否则就是radio上面的v-model
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(val) {
        //this.$emit('input', val)
        this.isGroup
          ? this.radioGroup.$emit("input", val)
          : this.$emit("input", val);
      },
    },
    //=====新增isGroup========//

    isGroup() {
      // 判断radio是否有group包裹
      return !!this.radioGroup; //强制转为布尔类型
    },

    isDisabled(){
        return this.disabled;
    }
  },
  props: {
    label: {
      //接收label
      type: [String, Number, Boolean],
      default: "",
    },
    value: null, // 接收v-model
    name: {
      // 有可能传name
      type: String,
      default: "",
    },
    disabled:{
        type:Boolean,
        default:false
    }
  },
};
</script>

<style lang="scss">
@import "./../../scss/global.scss";
.mc-radio {
  color: $wordColor;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .mc-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    border: 1px solid $borderColor;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: $white;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    .mc-radio__inner {
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }

    .mc-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .mc-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

/*增加选中的样式*/
.is-checked {
  .mc-radio__input {
    border-color: $default;
    .mc-radio__inner {
      border-color: $default;
      background: $default;
      width: 10px;
      height: 10px;
      border: 1px solid $default;
      border-radius: 100%;
      padding: 2px;
    }
  }
  .mc-radio__label {
    color: $default;
  }
}
/* 默认不可选中的样式*/
.is-disabled {
    cursor: not-allowed;
  .mc-radio__input {
    border-color: $disabledBdColor;
  }
  .mc-radio__label {
    color: $disabledWdColor;
  }
}
.is-disabled.is-checked {
  .mc-radio__input {
    .mc-radio__inner {
      border-color: $disabledBdColor;
      background: $disabledBgColor;
      border: 1px solid $disabledBdColor;
    }
  }

}




</style>
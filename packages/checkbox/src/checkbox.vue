<template>
  <div class="mc-checkbox" :class="checkBoxClass">
    <div :class="isDisable ? 'is-disable' : ''">
      <div :class="isButton ? 'checkboxBtn' : 'checkboxItem'">
        <input
          type="checkbox"
          :value="val"
          :id="label"
          :checked="checked"
          :disabled="isDisable"
          @change="checkChange($event)"
        />
        <label :for="label">{{ label }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "McCheckbox",
  model: { prop: "value", event: "change" },
  computed: {
    /**
     * 是否是复选框群组，通过父级ref是否为checkBigBox判断
     */
    isGroup() {
      return this.$parent.$refs && this.$parent.$refs.checkBigBox;
    },
  },
  mounted() {
    /**
     * 非多选组，并且初始为选中状态时，获取选中项的值
     */
    if (!this.isGroup) {
      if (this.checked) {
        this.$emit("change", this.val + "");
      }
    }
  },
  props: {
    /**
     * 外层盒子类名，可以通过属性传递配置，主要是修改文字颜色和字号。
     * 如要修改选中样式、选择框颜色，可以通过样式覆盖方式，选中样式暂不考虑可以配置方式。
     */
    checkBoxClass: {
      type: String,
      default: "checkboxDefault",
    },
    /**
     * 选择框是否是按钮形式，默认false
     */
    isButton: {
      type: Boolean,
      default: false,
    },
    /**
     * 选项名称
     */
    label: {
      type: String,
      default: "选项",
    },
    /**
     * 选项值
     */
    val: {
      type: [Number, String],
    },
    /**
     * 初始化时是否选中状态，默认false
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁止选择，默认false
     */
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * 点击checkbox时触发方法，多选组时调用父组件的增加和删除方法，单独复选框时设置值和清除值
     */
    checkChange(e) {
      if (this.isGroup) {
        if (e.target.checked) {
          this.$parent.addCheck(e.target.value);
        } else {
          this.$parent.delCheck(e.target.value);
        }
      } else {
        if (e.target.checked) {
          this.$emit("change", e.target.value);
        } else {
          this.$emit("change", "");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../scss/global.scss";
.mc-checkbox {
  .checkboxItem {
    margin: 0 rem(20) rem(20) 0;
    input {
      display: none;
    }
    label {
      cursor: pointer;
      line-height: 18px;
      font-size: 14px;
    }
    label::before {
      content: "\2714";
      width: 16px;
      height: 16px;
      background: $white;
      border: 1px solid $borderColor;
      display: inline-block;
      text-align: center;
      color: transparent;
      margin-right: 8px;
    }
    & input[type="checkbox"]:checked ~ label {
      color: $primary;
    }
    & input[type="checkbox"]:checked ~ label::before {
      width: 16px;
      height: 16px;
      content: "\2714";
      color: $white;
      border: 1px solid $primary;
      background: $primary;
      font-size: 12px;
      font-weight: bold;
      margin-right: 8px;
    }
  }
  .checkboxBtn {
    margin: 0 rem(20) rem(20) 0;

    input {
      display: none;
    }
    label {
      position: relative;
      padding: rem(4) rem(10);
      display: block;
    }

    label::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border: 1px solid $borderColor;
      text-align: center;
      color: transparent;
      margin-right: rem(6);
      position: absolute;
      left: 0;
      top: 0;
    }
    & input[type="checkbox"]:checked ~ label {
      color: $primary;
    }
    & input[type="checkbox"]:checked ~ label::before {
      content: "";
      color: $primary;
      border: 1px solid $primary;
    }
  }
  .is-disable {
    .checkboxItem {
      label {
        color: $disabledWdColor;
        cursor: not-allowed;
      }
      label::before {
        content: "√";
        border: 1px solid $disabledBdColor;
        color: transparent;
      }
      & input[type="checkbox"]:checked ~ label {
        color: $disabledWdColor;
      }
      & input[type="checkbox"]:checked ~ label::before {
        content: "√";
        color: $disabledWdColor;
        border: 1px solid $disabledBdColor;
        background: $disabledBdColor;
      }
    }
    .checkboxBtn {
      label {
        color: $disabledWdColor;
        cursor: not-allowed;
      }
      label::before {
        content: "";
        border: 1px solid $disabledBdColor;
        color: transparent;
      }
      & input[type="checkbox"]:checked ~ label {
        color: $disabledWdColor;
      }
      & input[type="checkbox"]:checked ~ label::before {
        content: "";
        color: $disabledWdColor;
        border: 1px solid $disabledBdColor;
      }
    }
  }
}
.checkboxDefault {
  color: #333;
}
</style>
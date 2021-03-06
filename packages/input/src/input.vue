<template>
  <div
    :class="[
      type === 'textarea' ? 'mc-textarea' : 'mc-input',
      {
        'is-disabled': inputDisabled,
        'mc-input-prefix': $slots.prefix,
        'mc-input-suffix': $slots.suffix,
        'mc-input-clearable': isClearable,
      },
    ]"
  >
    <!-- 前置元素 -->
    <span class="mc-input_prefix" v-if="$slots.prefix && type !== 'textarea'">
      <slot name="prefix"></slot>
    </span>

    <input
      v-if="type !== 'textarea'"
      class="mc-input_inner"
      @input="onInput"
      :value="value"
      :disabled="inputDisabled"
      :type="type"
      v-bind="$attrs"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <textarea
      v-else
      class="mc-textarea_inner"
      @input="onInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
    >
    </textarea>
    <!-- 清除按钮 -->
    <span
      class="mc-input_clearable"
      v-if="isClearable"
      @mousedown.prevent
      @click="clear"
    >
      <mc-icon class="mc-input_clear" :icon="'delete'" :size="'20px'"></mc-icon>
    </span>

    <!-- 后置元素 -->
    <span class="mc-input_suffix" v-if="$slots.suffix && type !== 'textarea'">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script>
import autoSizeHeight from './autoSizeHeight';
export default {
  name: "McInput",
  inheritAttrs: false, //关闭属性传递
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      hovering: false,
    };
  },
  computed: {
    inputDisabled() {
      return this.disabled;
    },
    isClearable() {
      return (
        this.clearable &&
        this.value != "" &&
        !this.disabled &&
        (this.focused || this.hovering)
      );
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
    clear() {
      this.$emit("input", "");
      this.$parent.$emit("validate");
    },
    handleFocus() {
      this.focused = true;
    },
    handleBlur(e) {
      this.focused = false;
      this.$emit("input", e.target.value);
    },
    esizeTextarea() {
        if (this.$isServer) return;
        const { autosize, type } = this;
        if (type !== 'textarea') return;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: autoSizeHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;
        this.textareaCalcStyle = autoSizeHeight(this.$refs.textarea, minRows, maxRows);
      },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../scss/global.scss";
/* input样式 */
.mc-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  .mc-input_inner {
    background-color: $white;
    background-image: none;
    border-radius: 4px;
    border: 1px solid $borderColor;
    box-sizing: border-box;
    color: $wordColor;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: $default;
    }
  }
}
/* input 的disabled样式 */
.mc-input.is-disabled {
  .mc-input_inner {
    background-color: $disabledBgColor;
    border-color: $disabledBdColor;
    color: $disabledWdColor;
    cursor: not-allowed;
  }
}

/* input 的前缀图标样式 样式 */
.mc-input-prefix {
  .mc-input_inner {
    padding-left: 30px;
  }
  .mc-input_prefix {
    position: absolute;
    left: 5px;
    top: 0;
    color: #c0c4cc;
    height: 100%;
    text-align: center;
    transition: all 0.3s;
    .mc-icon {
      line-height: 40px;
    }
  }
}
/* input 的后缀图标样式 样式 */
.mc-input-suffix {
  .mc-input_inner {
    padding-right: 30px;
  }
  .mc-input_suffix {
    position: absolute;
    right: 5px;
    top: 0;
    color: #c0c4cc;
    height: 100%;
    text-align: center;
    transition: all 0.3s;
    .mc-icon {
      line-height: 40px;
    }
  }
}
/* input 的后缀清除图标样式 样式 */
.mc-input-clearable {
  .mc-input_inner {
    padding-right: 30px;
  }
  .mc-input_clearable {
    position: absolute;
    right: 5px;
    top: 0;
    color: #c0c4cc;
    height: 100%;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
    .mc-icon {
      line-height: 40px;
    }
  }
}
.mc-input-suffix.mc-input-clearable {
  .mc-input_inner {
    padding-right: 60px;
  }
  .mc-input_clearable {
    right: 30px;
    top: 0;
  }
}

/* textarea样式 */
.mc-textarea {
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
  .mc-textarea_inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: $wordColor;
    background-color: $white;
    background-image: none;
    border: 1px solid $borderColor;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus {
      outline: none;
      border-color: $default;
    }
  }
}
.mc-textarea.is-disabled {
  .mc-textarea_inner {
    background-color: $disabledBgColor;
    border-color: $disabledBdColor;
    color: $disabledWdColor;
    cursor: not-allowed;
  }
}
</style>
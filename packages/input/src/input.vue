<template>
  <div>
    <input @input="onInput" :value="value" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "McInput",
  inheritAttrs: false, //关闭属性传递
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
  },
};
</script>
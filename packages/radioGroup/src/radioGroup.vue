<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "McRadioGroup",
  provide() {
    return {
      radioGroup: this,
    };
  },
  props: {
    value: null, //接收v-model
  },
};
</script>
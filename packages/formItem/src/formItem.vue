<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Validator from "async-validator";
export default {
  name: "McFormItem",
  inject: ["form"],
  props: ["label", "prop"],
  data() {
    return {
      errorMessage: "",
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        const descriptor = { [this.prop]: this.form.rules[this.prop] };
        const validator = new Validator(descriptor);
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          (errors) => {
            if (errors) {
              this.errorMessage = errors[0].message;
              resolve(false);
            } else {
              this.errorMessage = "";
              resolve(true);
            }
          }
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
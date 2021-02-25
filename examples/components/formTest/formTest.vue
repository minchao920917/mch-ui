<template>
  <div>
    <h3>mc输入框</h3>
    <hr />
    <mc-input
      v-model="input1"
      type="text"
      autocomplete="off"
      placeholder="请输入内容"
    ></mc-input>
    <mc-input
      v-model="input2"
      type="text"
      :disabled="true"
      autocomplete="off"
      placeholder="不能输入"
    ></mc-input>
    <mc-input
      v-model="input3"
      type="text"
      :clearable="true"
      autocomplete="off"
      placeholder="清除按钮"
    ></mc-input>
    <mc-input
      v-model="input4"
      type="number"
      autocomplete="off"
      placeholder="请输入number"
    ></mc-input>
    <mc-input
      v-model="input5"
      type="textarea"
      autocomplete="off"
      placeholder="内容输入框"
    ></mc-input>
    <mc-input
      v-model="input6"
      type="text"
      autocomplete="off"
      placeholder="前缀图标"
    >
      <mc-icon
        slot="prefix"
        :icon="'search'"
        :color="'#c0c4cc'"
        :size="'20px'"
      ></mc-icon>
    </mc-input>
    <mc-input
      v-model="input7"
      type="text"
      autocomplete="off"
      placeholder="后缀图标"
    >
      <mc-icon
        slot="suffix"
        :icon="'coordinates'"
        class="mc-input_icon"
        :color="'#c0c4cc'"
        :size="'20px'"
      ></mc-icon>
    </mc-input>
    <mc-input
      v-model="input8"
      type="text"
      autocomplete="off"
      :clearable="true"
      placeholder="后缀图标"
    >
      <mc-icon
        slot="suffix"
        :icon="'coordinates'"
        class="mc-input_icon"
        :color="'#c0c4cc'"
        :size="'20px'"
      ></mc-icon>
    </mc-input>

    <mc-radio v-model="radio" label="1">1</mc-radio>
    <mc-radio v-model="radio" label="2">2</mc-radio>


/* 单独复选框使用 */
<mc-checkbox  :label="'手机'"  :val="false"  :checked="checkOne.checked"  v-model="checkbox"></mc-checkbox>

/* 复选框组使用 */
<!-- <CheckBoxGroup v-model="checkBoxArr">  
    <Checkbox v-for="item in checkLists" :label="item.label" :val="item.value" :checked="item.checked" :isDisable="item.disable" :key="item.value" :checkBoxClass="checkBoxClass"></Checkbox>
</CheckBoxGroup> -->
<p>只有一项情况：{{ checkbox }}</p>
<!-- <p>复选框群组：{{ checkBoxArr }}</p> -->




<mc-radio-group v-model="radio1">
    <mc-radio label="1">1</mc-radio>
    <mc-radio label="2">2</mc-radio>
    <mc-radio label="3">3</mc-radio>
    <mc-radio label="4">4</mc-radio>
    <mc-radio label="5" disabled >5</mc-radio>
</mc-radio-group>



    <h3>mcForm表单</h3>
    <hr />
    <mc-form :model="ruleForm" :rules="rules" ref="mcForm">
      <mc-form-item prop="age" label="年龄">
        <mc-input
          v-model="ruleForm.age"
          type="text"
          autocomplete="new-password"
          placeholder="请输入年龄"
        ></mc-input>
      </mc-form-item>
      <mc-form-item prop="pass" label="密码">
        <mc-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="new-password"
        ></mc-input>
      </mc-form-item>
      <mc-form-item>
        <mc-btn type="primary" @click="submitForm('mcForm')">提交</mc-btn>
      </mc-form-item>
    </mc-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      radio:"1",
      radio1:"5",
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },

      checkbox:false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
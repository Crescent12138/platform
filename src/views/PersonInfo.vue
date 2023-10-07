<template>
  <div class="form-container">
    <h1>
        个人信息收集
    </h1>

    <el-form ref="form" :model="formData" label-width="0px">
    <el-form-item >
        <el-input placeholder="姓名" v-model="formData.name"></el-input>
    </el-form-item>
      <el-form-item >
        <el-radio-group v-model="formData.gender">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item >
        <el-input placeholder="年龄" v-model="formData.age"></el-input>
      </el-form-item>

      <el-form-item >
        <el-input placeholder="籍贯" v-model="formData.nativePlace"></el-input>
      </el-form-item>

      <el-form-item >
        <el-input placeholder="电话" v-model="formData.phone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="QQ" v-model="formData.qq"></el-input>
      </el-form-item>
    </el-form>

    <div class="submit-button-container">
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative; /* 添加相对定位 */
}

.submit-button-container {
  position: absolute; /* 添加绝对定位 */
  bottom: 0; /* 将按钮定位到底部 */
 align-items: center;
  margin-bottom: 40px; /* 添加一些底边距 */
}
</style>


<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: '',
        age: '',
        nativePlace: '',
        phone: '',
        qq: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 提交表单数据
          console.log(this.formData);
        } else {
          console.log('表单校验失败');
          return false;
        }
      });
    }
  }
};
</script>

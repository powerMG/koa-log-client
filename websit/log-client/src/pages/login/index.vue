<template>
  <el-row class="login-main">
    <el-col>
      <div class="login-form">
        <div class="login-tit">用户登录</div>
        <el-form ref="form" :model="form">
          <el-form-item>
            {{ form.username }}
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.password"
              :show-password="true"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width: 100%"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
export default {
  // data() {
  //   return {
  //     form: {
  //       username: null,
  //       password: null,
  //     },
  //   };
  // },
  // methods: {
  //   onSubmit() {
  //     console.log("submit!", this.form.username);
  //   },
  // },
  setup() {
    const form = reactive({
      username: null,
      password: null,
    });
    function onSubmit() {
      console.log("submit!", form.username);
    }
    return {
      form,
      onSubmit,
    };
  },
};
</script>

<style lang="less" scoped>
.login-main {
  background: #f0f7ff;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .login-form {
    width: 450px;
    height: 300px;
    margin: 14% auto 0px;
    box-shadow: rgba(36, 132, 255, 0.41) 0px 0px 60px 5px;
    padding: 20px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    .login-tit {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>

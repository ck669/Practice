<template>
  <div id="login">
    <div class="login-content">
      <div class="login-title">登录页</div>
      <el-form :model="userLoginForm" ref="userLoginForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account" :rules="accountRules">
          <el-input type="account" v-model.number="userLoginForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" :rules="pwdRules">
          <el-input
            type="password"
            v-model.number="userLoginForm.pwd"
            autocomplete="off"
            @keyup.enter.native="submitForm('userLoginForm')"
          ></el-input>
        </el-form-item>
        <el-form-item class="login-button">
          <el-button type="primary" @click="submitForm('userLoginForm')">登录</el-button>
          <el-button @click="resetForm('userLoginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      userLoginForm: {
        account: "",
        pwd: ""
      },
      accountRules: [
        { required: true, message: "账号不能为空" },
        {
          pattern: /^1[34578]\d{9}$/, //可以写正则表达式呦呦呦
          message: "请输入11位有效手机号码"
        }
      ],
      pwdRules: [
        { required: true, message: "密码不能为空" }
        // { pattern: /^[a-zA-Z0-9]{6}$/, message: "密码" }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {
            account: this.userLoginForm.account,
            pwd: this.userLoginForm.pwd
          };
          // console.log(obj);
          if (obj.account === 15916916901 && obj.pwd === 123) {
            Cookies.set("userName", "院长", { expires: 7 });
            this.$router.push({ name: "home" });
            this.$message.success("登录成功");
            this.$store.commit("changeLogin", true);
            this.$store.commit("setUserName", "院长");
          } else {
            this.$message.error("密码输入错误");
          }
        } else {
          return;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  // text-align: center;
  height: 600px;
  background-image: url("../assets/images/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  .login-content {
    width: 400px;
    margin: 100px auto;
    background-color: white;
    border-radius: 5px;
    padding: 10px 0;
    .login-title {
      text-align: center;
      margin-bottom: 10px;
    }
    .demo-ruleForm {
      padding: 0 38px 0 0;
    }
    .login-button {
      .el-form-item__content {
        margin-left: 160px;
      }
    }
  }
}
</style>

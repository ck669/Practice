<template>
  <div id="header">
    <div class="logo" @click="toHome">
      <img src="../../assets/images/logo.png" alt />
    </div>
    <ul class="nav-bar">
      <li>新闻</li>
      <li>活动</li>
      <li>关于</li>
    </ul>
    <div>
      <el-button type="primary" @click="toLogin" v-if="isLogin == false">登录</el-button>
      <span v-else>{{isUserName}}</span>
      <el-button type="primary" @click="loginOut" v-if="isLogin == true">退出</el-button>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.state.userLogin =
      Cookies.get("userName") == undefined ? false : true;
    let userName = Cookies.get("userName");
    this.$store.state.userName = userName;
  },
  computed: {
    isLogin() {
      return this.$store.state.userLogin;
    },
    isUserName() {
      return this.$store.state.userName;
    }
  },
  methods: {
    toHome() {
      this.$router.push({ name: "home" });
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    loginOut() {
      this.$store.commit("changeLogin", false);
      Cookies.remove("userName");
    }
  }
};
</script>

<style lang="scss">
#header {
  height: 60px;
  display: flex;
  justify-content: space-around;
  .logo {
    width: 60px;
    img {
      height: 100%;
    }
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    li {
      padding: 10px;
    }
  }
}
</style>
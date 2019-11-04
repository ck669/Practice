<template>
  <div id="header">
    <div class="logo" @click="toHome">
      <img src="../../assets/images/logo.png" alt />
    </div>
    <ul class="nav-list">
      <li v-for="item in navList" :key="item.id">
        <router-link :to="{name:item.name}">{{item.title}}</router-link>
      </li>
    </ul>
    <div class="header-right">
      <el-button type="primary" @click="toLogin" v-if="isLogin == false">登录</el-button>
      <span v-else>{{isUserName}}</span>
      <el-button type="primary" @click="loginOut" v-if="isLogin == true">退出</el-button>
    </div>
  </div>
</template>

<script>
import navList from "@/forData/navList";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      navList
    };
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
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  .logo {
    width: 60px;
    height: 100%;
    float: left;
    margin-right: 30px;
    img {
      height: 100%;
    }
  }
  .nav-list {
    height: 100%;
    display: flex;
    justify-content: space-between;
    float: left;
    li {
      padding: 10px;
      font-size: 18px;
    }
  }
  .header-right {
    height: 100%;
    float: right;
  }
}
</style>
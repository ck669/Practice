<template>
  <div id="header">
    <div class="logo" @click="toHome">
      <img src="../assets/images/logo.png" alt />
    </div>
    <div class="nav-list">
      <router-link
        v-for="item in navList"
        :key="item.id"
        :to="{name:item.name}"
        :class="{active:item.name == $route.name}"
      >{{item.title}}</router-link>
    </div>
    <div class="header-right">
      <el-button type="primary" @click="toLogin" v-if="userLogin == false">登录</el-button>
      <span v-else>{{userName}}</span>
      <el-button type="primary" @click="loginOut" v-if="userLogin == true">退出</el-button>
    </div>
  </div>
</template>

<script>
import navList from "@/forData/navList";
import Cookies from "js-cookie";
import { mapState, mapMutations } from 'vuex';

export default {
  data () {
    return {
      navList
    };
  },
  created () {
    this.changeLogin(Cookies.get("userName") == undefined ? false : true);
    this.setUserName(Cookies.get("userName"));
  },
  computed: {
    ...mapState(['userLogin', 'userName'])
  },
  methods: {
    ...mapMutations(['changeLogin', 'setUserName']),
    toHome () {
      this.$router.push({ name: "home" });
    },
    toLogin () {
      this.$router.push({ name: "login" });
    },
    loginOut () {
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
    .active {
      color: snow;
      background-color: #2c98e7;
    }
    .active:hover {
      color: snow;
    }
    a {
      font-size: 16px;
      height: 100%;
      display: block;
      padding: 0 32px;
      margin: 0 0.5px;
    }
    a:hover {
      color: snow;
      background-color: #2c98e7;
    }
  }
  .header-right {
    height: 100%;
    float: right;
  }
}
</style>

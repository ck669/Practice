<template>
  <div id="app">
    <el-container>
      <el-header height="60px">
        <Header />
      </el-header>
      <el-main>
        <router-view :afooterHeight="afooterHeight" />
      </el-main>
      <el-footer height="70px" ref="afooter">
        <Footer />
      </el-footer>
    </el-container>
    <el-backtop target="#app">
      <i class="iconfont icon-caret-top"></i>
    </el-backtop>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data () {
    return {
      afooterHeight: ""
    };
  },
  mounted () {
    console.log("执行了吗APP", this.$refs.afooter.$el.clientHeight);
    this.afooterHeight = this.$refs.afooter.$el.clientHeight;
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset";
.el-container {
  background: #fdfdfd;
  .el-header {
    background-color: #fdfdfd;
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid black;
  }
  .el-main {
    width: 1200px;
    margin: 0 auto;
    min-height: 616px;
  }
  .el-footer {
    background-color: #130a2a;
    color: #808080;
    text-align: center;
    line-height: 70px;
  }
}
</style>

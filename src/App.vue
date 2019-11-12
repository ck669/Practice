<template>
  <div id="app">
    <el-container>
      <el-header height="70px">
        <Header />
      </el-header>
      <el-main>
        <router-view :afooterHeight="afooterHeight" />
      </el-main>
      <el-footer height="70px" ref="afooter">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      afooterHeight: ""
    };
  },
  mounted() {
    console.log("执行了吗APP", this.$refs.afooter.$el.clientHeight);
    this.afooterHeight = this.$refs.afooter.$el.clientHeight;
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset";
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 70px;
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
</style>

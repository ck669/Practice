<template>
  <div id="home">
    <h1 class="item-title">我是首页</h1>
    <el-carousel height="400px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.src" :alt="item.title" />
      </el-carousel-item>
    </el-carousel>
    <br />
    <br />
    <el-row>
      <el-form :model="timeForm" label-width="100px">
        <el-col :span="8">
          <el-form-item label="报名时间">
            <el-input type="account" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="报名时间">
            <el-input type="account" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="报名时间">
            <el-input type="account" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="报名时间">
            <nxDatePicker
              range="-"
              valueFormat="yyyy-MM-dd"
              @changeDate="changeDate"
              :placeholder="['开始时间', '结束时间']"
              :disabledDates="['2019-12-02', '2019-12-19']"
            ></nxDatePicker>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <div style="height:200px;color:red;font-size:20px;">往下拉,{{myNum}}</div>
    <div style="height:200px;color:red;font-size:20px;">往下拉</div>
    <div style="height:200px;color:red;font-size:20px;">往下拉</div>
    <div style="height:200px;color:red;font-size:20px;">啥也没有了</div>
    <div class="footer-fixed" ref="footerFixed">
      <div class="footer-fixed-logo"></div>
      <div class="footer-fixed-content">你好,{{username}}</div>
    </div>
  </div>
</template>

<script>
import toNum from "@/config";
import Cookies from "js-cookie";
import nxDatePicker from '@/components/nx-date-picker';
export default {
  name: "HelloWorld",
  data () {
    return {
      imgList: [
        {
          title: "login",
          src: require("@/assets/images/login.jpg")
        },
        {
          title: "lol",
          src: require("@/assets/images/lol.jpg")
        },
        {
          title: "ship",
          src: require("@/assets/images/ship.png")
        }
      ],
      myNum: toNum,
      username: "",
      timeForm: {
        startDates: '',
        lastDates: '',
      }
    };
  },
  methods: {
    handleScroll () {
      if (this.$refs.footerFixed) {
        var scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        var myScrollHeight =
          document.documentElement.scrollHeight - this.$props.afooterHeight;

        if (
          myScrollHeight <
          document.documentElement.clientHeight + scrollTop
        ) {
          this.$refs.footerFixed.style.position = "absolute";
          this.$refs.footerFixed.style.top = myScrollHeight - 60 + "px";
          this.$refs.footerFixed.style.bottom = "auto";
        } else {
          this.$refs.footerFixed.style.position = "fixed";
          this.$refs.footerFixed.style.top = "auto";
          this.$refs.footerFixed.style.bottom = "0px";
        }
      }
    },
    changeDate (starts, lasts) {
      this.timeForm.startDates = starts;
      this.timeForm.lastDates = lasts;
      console.log('父开始时间', this.timeForm.startDates);
      console.log('父结束时间', this.timeForm.lastDates);
    }
  },
  created () {
    this.username = Cookies.get("userName");
  },
  mounted () {
    // console.log("可视区域", document.documentElement.clientHeight);
    // console.log("页面总高", document.body.scrollHeight);
    this.$refs.footerFixed.style.position = "fixed";
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  props: ["afooterHeight"],
  components: {
    nxDatePicker
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#home {
  .item-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  .el-carousel__container {
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer-fixed {
    width: 100%;
    height: 60px;
    left: 0;
    top: auto;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    line-height: 60px;
    z-index: 2;
    .footer-fixed-logo {
      width: 90px;
      height: 100px;
      background-image: url("../assets/images/teacher.png");
      background-size: cover;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .footer-fixed-content {
      width: 88%;
      position: relative;
      left: 100px;
      font: bold 20px arial;
      color: snow;
      line-height: 60px;
    }
  }
}
</style>

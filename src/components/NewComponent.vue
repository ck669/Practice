<template>
  <div class="new">
    我是新模块
    <Son @sccuess="sccuess" />
    <p>被子组件修改的值：{{strr}}</p>
    <table border="1">
      <tr v-for="(item,index) in porsons" :key="index">
        <td style="padding:10px">{{item.name}}</td>
        <td style="padding:10px">{{item.age}}</td>
      </tr>
    </table>
    <div class="supload">
      <Upload class="upload-in" @uploadover="uploadover" :accept="'.zip,.jpg'" />
      <img :src="src" style="width:200px" />
    </div>
    <div>
      <button @click.prevent.self="OpenPopup">OpenPopup</button>
      <Popup v-show="popup" />
    </div>
    <input type="text" v-model.trim="myStr" @change="strChange" />
    <p>{{myStr}}</p>
    <div @contextmenu="myRight">点击右键触发</div>
  </div>
</template>
<script>
import Upload from "@/components/Upload";
import Son from "@/components/Son.vue";
import Popup from "@/components/Popup.vue";
export default {
  components: {
    Son,
    Upload,
    Popup
  },
  data() {
    return {
      strr: "",
      porsons: [
        {
          name: "李白",
          age: 18
        },
        {
          name: "王昭君",
          age: 16
        },
        {
          name: "浏览器",
          age: 10
        }
      ],
      src: "",
      popup: false,
      myStr: ""
    };
  },
  mounted() {
    var str = "RUNOOB";
var enc = window.btoa(str);
var dec = window.atob(enc);
 
var res = "编码字符串为: " + enc + "<br>" + "解码后字符串为: " + dec;
    console.log(res);
    console.log(new Date("2016-01-01 17:22:37"));
    console.log(
      new Date("2016-01-01 17:22:37").getFullYear() +
        "-" +
        (new Date("2016-01-01 17:22:37").getMonth() + 1).toString() +
        "-" +
        new Date("2016-01-01 17:22:37").getDate()
    );
  },
  methods: {
    sccuess(str) {
      this.strr = str;
    },
    uploadover(src) {
      console.log("父组件", src);
      this.src = src;
    },
    OpenPopup() {
      this.popup = true;
      setTimeout(() => {
        this.popup = false;
      }, 3000);
    },
    strChange() {
      console.log(this.myStr);
      console.log("执行了");
    },
    myRight() {
      alert("你执行了右键");
    }
  }
};
</script>

<style lang="scss" scoped>
.new {
  background: wheat;
  .supload {
    width: 200px;
    height: 200px;
    background: gold;
    position: relative;
    .upload-in {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
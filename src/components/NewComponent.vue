<template>
  <div class="new">
    <h1 class="item-title">传值图片</h1>
    <Son @sccuess="sccuess" />
    <p>被子组件修改的值：{{strr}}</p>
    <table border="1" @click="clickItem($event)">
      <tr v-for="(item,index) in porsons" :key="index" :data-val="item.val">
        <td style="padding:10px">{{item.name}}</td>
        <td style="padding:10px">{{item.age}}</td>
      </tr>
    </table>
    <ul @click="clickItemli($event)" class="ul-lis">
      <li v-for="(item,index) in porsons" :key="index" :data-val="item.val">{{item.name}}</li>
    </ul>
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
          val: "李白",
          name: "李白",
          age: 18
        },
        {
          val: "王昭君",
          name: "王昭君",
          age: 16
        },
        {
          val: "浏览器",
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
    // let date = new Date("Wed Nov 20 2019 00:00:00 GMT+0800 (中国标准时间)");
    let date = new Date();

    console.log(
      date.getFullYear() +
        "-" +
        (date.getMonth() + 1).toString() +
        "-" +
        date.getDate()
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
    },
    clickItem(event) {
      var e = event || window.event;
      console.log(e.target.parentNode.dataset.val);
    },
    clickItemli(event) {
      var e = event || window.event;
      console.log(e.target.dataset.val);
    }
  }
};
</script>

<style lang="scss" scoped>
.new {
  color: #f5dea0;
  background: #108b00;
  .item-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  .ul-lis {
    li {
      padding: 10px;
      border-bottom: 1px solid black;
    }
  }
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
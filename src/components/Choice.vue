<template>
  <div class="choice">
    <h1 class="item-title">搜索选择</h1>
    <el-select v-model="value" filterable placeholder="请输内容搜索" @change="changeValue">
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <div>count:{{$store.state.personList[0]}}</div>
    <button @click="changeP(10)">click Me change</button>
    <br />
    <input type="text" v-model="searchStr" />
    <div class="loading"></div>
    <a href="#">超链接</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金烤"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: null,
      searchStr: ""
    };
  },
  watch: {
    value1(newValue, oldValue) {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    },
    searchStr: {
      handler: "fetchPostList",
      immediate: true
    }
  },
  created() {
    // this.changeP(20);
  },
  mounted() {
    // console.log(this.$store.dispatch('changeP',20));
    this.changeP(20);
  },
  methods: {
    ...mapActions(["changeP"]),
    changeValue() {
      console.log(this.value);
    },
    fetchPostList() {
      console.log("改变内容立即执行请求=", this.searchStr);
    }
  }
};
</script>

<style lang="scss">
.choice {
  .item-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  input[type="text"],
  textarea {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #ddd;
  }

  input[type="text"]:focus,
  textarea:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }
  .loading:after {
    font: bold 15px '微软雅黑';
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis 2s infinite;
    content: "\2026"; /* ascii code for the ellipsis character */
  }
  @keyframes ellipsis {
    from {
      width: 2px;
    }
    to {
      width: 15px;
    }
  }
  a:link {
    color: blue;
  }
  a:visited {
    color: #5db6ff;
  }
  a:hover {
    color: red;
  }
  a:active {
    color: yellow;
  }

}
</style>
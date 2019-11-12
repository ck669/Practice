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
    <!-- <div>count:{{$store.state.count}}</div> -->
    <button @click="dell(10)">点击我</button>
    <input type="text" v-model="searchStr" />
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
  mounted() {
    // console.log(this.$store.dispatch);
    // this.$store.dispatch("changePersonList",20);
  },
  methods: {
    ...mapActions({ dell: "changePersonList" }),
    changeValue() {
      console.log(this.value);
    },
    fetchPostList(){
      console.log('改变内容执行请求',this.searchStr);
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
}
</style>
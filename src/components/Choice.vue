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
    <el-button type="primary" @click="add">新增</el-button>
    <ul class="lis">
      <li
        class="li-item"
        v-for="(item,index) in dataList"
        :key="index"
        :class="{'active-item':index%2!==0}"
      >
        <div>{{item.key}}<input type="text" v-model="item.key"></div>
        <div>{{item.name}}<input type="text" v-model="item.name"></div>
        <div>
          <span v-show="index !== 0" @click="moveUP(index)" class="span-item">上移</span>
          <span v-show="index === 0" class="span-item"></span>
          &nbsp;&nbsp;&nbsp;
          <span v-show="index !== dataList.length-1 " @click="moveDown(index)">下移</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
      dataList: [
        {
          key: "01",
          name: "张益达"
        },
        {
          key: "02",
          name: "张益达2"
        },
        {
          key: "03",
          name: "张益达3"
        },
        {
          key: "04",
          name: "张益达4"
        }
      ]
    };
  },
  watch: {
    // value1(newValue,oldValue){
    //   console.log('newValue',newValue);
    //   console.log('oldValue',oldValue);
    // }
  },
  methods: {
    changeValue() {
      console.log(this.value);
    },
    add() {
      this.dataList.push({
        key: '',
        name: ''
      })
      console.log(this.value);
    },
    moveUP(inde) {
      console.log('上移',inde);
      this.moveComm(inde, inde - 1);
      console.log(this.dataList);
    },
    moveDown(inde) {
      console.log('下移',inde);
      this.moveComm(inde, inde + 1);
      console.log(this.dataList);
    },
    moveComm(curIndex, nextIndex) {
      let arr = this.dataList;
      arr[curIndex] = arr.splice(nextIndex, 1, arr[curIndex])[0];
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
  .lis {
    padding: 30px 0;
    border: 1px solid;
    .li-item {
      display: flex;
      padding: 14px 0;
      div {
        width: 30%;
        .span-item{
          width: 28px;
          height: 15px;
          display: inline-block;
        }
      }
    }
    .active-item {
      background: lightblue;
    }
  }
}
</style>
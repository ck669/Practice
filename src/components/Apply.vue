<template>
  <div>
    <div>申请竞赛</div>
    <el-steps :active="num">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <div class="content">
      <div v-show="num == 1 ">
        <div>我是第一页</div>
        <input type="text" name="" id=""><br/>
        <el-button @click="toNext(2)">下一步</el-button>
      </div>
      <div v-show="num == 2 ">
        <div>我是第二页</div>
        <input type="text" name="" id=""><br/>
        <el-button @click="toNext(1)">上一步</el-button>
        <el-button @click="toNext(3)">下一步</el-button>
      </div>
      <div v-show="num == 3 ">
        <div>我是第三页</div>
        <input type="file" name="" id=""><br/>
        <el-button @click="toNext(2)">上一步</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
      toNext(num){
          this.num = num;
      }
  }
};
</script>
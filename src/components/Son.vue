<template>
  <div class="son">
    我是子组件
    <button @click="getData">点击我</button>
    {{student.name}}&emsp;{{student.gender}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      student: {
        name: "李",
        gender: "男"
      },
      por: {
        name: "齐白石",
        age: 12,
        gender: "男"
      }
    };
  },
  mounted() {
    this.dataFunc();
    console.log(Object.keys(this.por));
  },
  methods: {
    dataFunc() {
      this.$emit("sccuess", "良好");
    },
    getData() {
      alert(this.student.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.son {
  background: yellowgreen;
}
</style>
<template>
  <div id="home">
    <h1>我是首页</h1>
    <div>{{myNum}}</div>
    <div class="link-box">
      <div v-for="(item, index) in linkData" :key="index" class="link-item">
        <router-link :to="{name:item.name}">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import toNum from "@/config";
import linkData from "@/forData/homeData";
export default {
  name: "HelloWorld",
  data() {
    return {
      myNum: toNum,
      linkData
    };
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
  .link-box {
    width: 500px;
    display: flex;
    word-wrap: wrap;
    .link-item{
      padding: 10px;
    }
  }
}
</style>

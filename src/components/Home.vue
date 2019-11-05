<template>
  <div id="home">
    <h1>我是首页：{{myNum}}</h1>
    <el-carousel height="400px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index" >
        <img :src="item.src" :alt="item.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import toNum from "@/config";
import linkData from "@/forData/homeData";
export default {
  name: "HelloWorld",
  data() {
    return {
      imgList:[
        {
          title:'login',
          src: require('@/assets/images/login.jpg')
        },
        {
          title:'lol',
          src: require('@/assets/images/lol.jpg')
        },
        {
          title:'ship',
          src: require('@/assets/images/ship.png')
        }
      ],
      myNum: toNum,
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
  width: 1200px;
  margin: 0 auto;
  .el-carousel__container{
    .el-carousel__item{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

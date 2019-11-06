<template>
  <div>
    <h1>Echart图表</h1>
    <div ref="chart1" style="width:500px;height:376px"></div>
  </div>
</template>

<script>

// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/component/grid");
require("echarts/lib/component/toolbox");
export default {
  data() {
    return {};
  },
  mounted() {
    this.makingIcons();
  },
  methods: {
    makingIcons() {
      const chart1 = this.$refs.chart1;
      var myChart = echarts.init(chart1);
      // myChart.showLoading();
      setTimeout(function() {
        myChart.hideLoading();
      }, 2000);
      // 绘制图表
      let option = {
        title: {
          text: "数据记录"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            // stack: "总量",
            data: [500, 670, 1300, 1369, 590, 1600, 1900]
          },
          {
            name: "搜索引擎",
            type: "line",
            // stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>
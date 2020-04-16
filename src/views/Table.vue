<template>
  <div class="table">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王二虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }, {
          id: '12987127',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        spanData: [],
        pos: 0
    };
  },
  created() {
    this.getSpanData(this.tableData);
  },
  mounted() {

  },
  methods: {
    getSpanData(data) {
        // 存放计算好的合并单元格的规则
        this.spanData = []
        for (var i = 0; i < data.length; i++) {
            if (i === 0) {
                this.spanData.push(1)
                this.pos = 0
            } else {
                // 判断当前元素与上一个元素是否相同
                if (data[i].name === data[i - 1].name) {
                    this.spanData[this.pos] += 1
                    this.spanData.push(0)
                } else {
                    this.spanData.push(1)
                    this.pos = i
                }
            }
        }
        console.log(this.spanData);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // 需要合并的列
        // [0, 1, 2].includes(columnIndex ), 表示合并前三列
        if (columnIndex === 1) {
        const _row = this.spanData[rowIndex]
        const _col = _row > 0 ? 1 : 0
            return {
            rowspan: _row,
            colspan: _col
            }
        }
    }
  }
};
</script>

<style lang="scss">
.table {

}
</style>
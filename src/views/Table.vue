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
          id: '1',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '1',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 9
        }, {
          id: '3',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '4',
          name: '王二虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 9
        }, {
          id: '5',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }, {
          id: '6',
          name: '王小虎',
          amount1: '539',
          amount2: '4.6',
          amount3: 15
        }],
        columnI:[{index:[1,3], key: 'name' }, {index: 4, key: 'amount3'}], // 传入判断条件的字段以及想合并的下标
        mColumn: {},
        current: 0
    };
  },
  created() {
      this.init();
  },
  mounted() {

  },
  methods: {
    init(){
        for (let i = 0; i < this.columnI.length; i++) {
            this.mColumn[this.columnI[i].key] = [];
        }
        for (let i = 0; i < this.columnI.length; i++) {
            this.getSpanData(this.tableData, Object.keys(this.mColumn)[i]);
        }
    },
    getSpanData(data, str) {
        // 存放计算好的合并单元格的规则
        console.log(str)
        this.mColumn[str] = [];
        for (var i = 0; i < data.length; i++) {
            if (i === 0) {
                this.mColumn[str].push(1)
                this.current = 0
            } else {
                // 判断当前元素与上一个元素是否相同
                if (data[i][str] === data[i - 1][str]) {
                    this.mColumn[str][this.current] += 1
                    this.mColumn[str].push(0)
                } else {
                    this.mColumn[str].push(1)
                    this.current = i
                }
            }
        }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if(this.columnI.length){
        // 需要合并的列
        for (let i = 0; i < this.columnI.length; i++) {
          if(Array.isArray(this.columnI[i].index)){ // 判断columnI的index是不是数组
            for (let j = 0; j < this.columnI[i].index.length; j++) {
              if (columnIndex === this.columnI[i].index[j]) {
              const _row = this.mColumn[Object.keys(this.mColumn)[i]][rowIndex]
              const _col = _row > 0 ? 1 : 0
                  return {
                  rowspan: _row,
                  colspan: _col
                  }
              }
            }
          } else { // columnI的index不是数组
            if (columnIndex === this.columnI[i].index) {
              const _row = this.mColumn[Object.keys(this.mColumn)[i]][rowIndex]
              const _col = _row > 0 ? 1 : 0
                  return {
                  rowspan: _row,
                  colspan: _col
                  }
              }
          }
        }
      }else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.table {

}
</style>

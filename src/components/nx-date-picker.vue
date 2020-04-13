<template>
  <div class="date-picker">
    <el-date-picker
      type="date"
      v-model="startDate"
      :picker-options="startDateOption"
      :placeholder="placeholder[0]"
      :format="format"
      :value-format="valueFormat"
      @change="changeDate"
    />
    <samp>{{range}}</samp>
    <el-date-picker
      type="date"
      v-model="lastDate"
      :picker-options="lastDateOption"
      :placeholder="placeholder[1]"
      :format="format"
      :value-format="valueFormat"
      @change="changeDate"
    />
  </div>
</template>
<script>
export default {
  // 参数说明
  // range: 时间选择器中间显示内容，默认：至
  // format: 显示在输入框中的格式，默认：yyyy-MM-dd
  // valueFormat：绑定值的格式，默认：yyyy-MM-dd
  // changeDate：绑定事件回调函数：第一个参数为开始时间，第二个参数为结束时间
  // placeholder：时间框提示语，数组：下标0为开始提示语，下边1为结束提示语
  // disabledDates：禁用时间范围 [ 开始时间，结束时间 ]，只有开始时间结束时间不传，只有结束时间开始时间传''

  data() {
    return {
      startDate: "",
      lastDate: "",
      startDateOption: {
        disabledDate: time => {
          let startTime = 0;
          let endTime = 0;
          if (this.disabledDates[0]) {
            startTime = this.disabledDates[0];
          }
          if (this.disabledDates[1]) {
            endTime = this.disabledDates[1];
          }
          if (this.lastDate) {
            endTime = this.lastDate;
          }
          if (endTime && startTime) {
            if (this.lastDate) {
              return !(
                time.getTime() > new Date(startTime) &&
                time.getTime() <= new Date(endTime)
              );
            }
            return !(
              time.getTime() > new Date(startTime) &&
              time.getTime() < new Date(endTime) - 8.64e7
            );
          } else if (endTime) {
              if(this.lastDate){
                  return time.getTime() > new Date(endTime);
              }
            return time.getTime() > new Date(endTime) - 8.64e7;
          } else if (startTime) {
            return time.getTime() < new Date(startTime);
          } else {
            return time.getTime() < new Date(startTime);
          }
        }
      },
      lastDateOption: {
        disabledDate: time => {
          let startTime = 0;
          let endTime = 0;
          if (this.disabledDates[0]) {
            startTime = this.disabledDates[0];
          }
          if (this.startDate) {
            startTime = this.startDate;
          }
          if (this.disabledDates[1]) {
            endTime = this.disabledDates[1];
          }
          if (startTime && endTime) {
            if (this.startDate) {
              return !(
                time.getTime() > new Date(startTime) - 8.64e7 &&
                time.getTime() < new Date(endTime) - 8.64e7
              );
            }
            return !(
              time.getTime() > new Date(startTime) &&
              time.getTime() < new Date(endTime) - 8.64e7
            );
          } else if (startTime) {
            return time.getTime() < new Date(startTime) - 8.64e7;
          } else if (endTime) {
            return time.getTime() > new Date(endTime) - 8.64e7;
          } else {
            return time.getTime() < new Date(endTime);
          }
        }
      }
    };
  },
  methods: {
    changeDate() {
      this.$emit("changeDate", this.startDate, this.lastDate);
    }
  },
  props: {
    range: {
      type: String,
      default: "至"
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd"
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    },
    placeholder: {
      type: Array,
      default: () => ["请选择", "请选择"]
    },
    disabledDates: {
      type: Array,
      default: () => ['', '']
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker {
  display: flex;
  /deep/ .el-date-editor {
    .el-input__inner {
      padding: 0 14px;
    }
    .el-input__prefix {
      display: none;
    }
  }
  samp {
    padding: 0 4px;
  }
}
</style>
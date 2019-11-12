<template>
  <div class="apply-race">
    <h1 class="item-title">申请竞赛</h1>
    <el-steps :active="numShow" align-center>
      <el-step title="竞赛介绍"></el-step>
      <el-step title="时间安排"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <div class="content">
      <div v-show="numShow == 1 ">
        <el-form
          :model="detailsForm"
          ref="detailsForm"
          label-width="100px"
          class="demo-ruleForm"
          :rules="detailsRules"
        >
          <el-form-item label="竞赛名称" prop="title">
            <el-input type="title" v-model="detailsForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="竞赛介绍" prop="details">
            <el-input type="textarea" v-model="detailsForm.details" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <el-button @click="resetForm('detailsForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
        <div class="form-footer">
          <el-button @click="toTime">下一步</el-button>&emsp;
          <el-button type="primary" @click="preserveMy">保存</el-button>
        </div>
      </div>
      <div v-show="numShow == 2 ">
        <el-form :model="timeForm" label-width="100px" :rules="timeRules">
          <el-form-item label="报名时间" required>
            <el-date-picker
              v-model="timeForm.date1"
              :clearable="true"
              :picker-options="dataOptions1"
              style="width:180px"
              placeholder="报名开始时间"
              type="date"
            />
            <samp>至</samp>
            <el-date-picker
              v-model="timeForm.date2"
              :clearable="true"
              :picker-options="dataOptions2"
              style="width:180px"
              placeholder="报名结束时间"
              type="date"
            />
          </el-form-item>
          <el-form-item label="评审时间" required>
            <el-date-picker
              v-model="timeForm.reviewDate1"
              :clearable="true"
              :picker-options="reviewOptions1"
              style="width:180px"
              placeholder="评审开始时间"
              type="date"
            />
            <samp>至</samp>
            <el-date-picker
              v-model="timeForm.reviewDate2"
              :clearable="true"
              :picker-options="reviewOptions2"
              style="width:180px"
              placeholder="评审结束时间"
              type="date"
            />
          </el-form-item>
          <el-form-item label="发布时间" prop="releaseDate">
            <el-date-picker
              v-model="timeForm.releaseDate"
              :clearable="true"
              :picker-options="releaseOptions"
              style="width:180px"
              placeholder="发布时间"
              type="date"
            />
          </el-form-item>
        </el-form>
        <div class="form-footer">
          <el-button @click="toNext(1)">上一步</el-button>&emsp;
          <el-button @click="toThere">下一步</el-button>&emsp;
          <el-button type="primary" @click="preserveMy">保存</el-button>
        </div>
      </div>
      <div v-show="numShow == 3 ">
        <div>我是第三页</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input type="file" name id />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="form-footer">
          <el-button @click="toNext(2)">上一步</el-button>&emsp;
          <el-button @click="releaseMy">发布</el-button>&emsp;
          <el-button type="primary" @click="preserveMy">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numShow: 1,
      detailsForm: {
        title: "",
        details: ""
      },
      detailsRules: {
        title: [
          { required: true, message: "竞赛名称不能为空", trigger: "blur" },
          { min: 1, max: 10, message: "长度在不能超过 10 个字符" }
        ],
        details: [
          { required: true, message: "竞赛介绍不能为空", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 100 个字符" }
        ]
      },
      timeForm: {
        date1: "",
        date2: "",
        reviewDate1: "",
        reviewDate2: "",
        releaseDate: ""
      },
      dataOptions1: {
        disabledDate: time => {
          if (this.timeForm.date2) {
            return time.getTime() > Number(new Date(this.timeForm.date2));
          }
          if (this.timeForm.reviewDate1) {
            return (
              time.getTime() >= Number(new Date(this.timeForm.reviewDate1))
            );
          }
          if (this.timeForm.reviewDate2) {
            return (
              time.getTime() >= Number(new Date(this.timeForm.reviewDate2))
            );
          }
          if (this.timeForm.releaseDate) {
            return (
              time.getTime() >= Number(new Date(this.timeForm.releaseDate))
            );
          }
        }
      },
      dataOptions2: {
        disabledDate: time => {
          let startTime = 0;
          let endTime = 0;
          if (this.timeForm.date1) {
            startTime = this.timeForm.date1;
          }
          if (this.timeForm.reviewDate1) {
            endTime = this.timeForm.reviewDate1;
          } else if (this.timeForm.reviewDate2) {
            endTime = this.timeForm.reviewDate2;
          } else if (this.timeForm.releaseDate) {
            endTime = this.timeForm.releaseDate;
          }
          if (endTime && startTime) {
            return !(
              time.getTime() >= Number(new Date(startTime)) &&
              time.getTime() < Number(new Date(endTime))
            );
          } else if (endTime) {
            return time.getTime() >= Number(new Date(endTime));
          } else {
            return time.getTime() < Number(new Date(startTime));
          }
        }
      },
      reviewOptions1: {
        disabledDate: time => {
          let startTime = 0;
          let endTime = 0;
          if (this.timeForm.date2) {
            startTime = this.timeForm.date2;
          } else if (this.timeForm.date1) {
            startTime = this.timeForm.date1;
          }
          if (this.timeForm.reviewDate2) {
            endTime = this.timeForm.reviewDate2;
          } else if (this.timeForm.releaseDate) {
            endTime = this.timeForm.releaseDate;
          }
          if (endTime && startTime) {
            if (this.timeForm.reviewDate2) {
              return !(
                time.getTime() > Number(new Date(startTime)) &&
                time.getTime() < Number(new Date(endTime))
              );
            }
            return !(
              time.getTime() > Number(new Date(startTime)) &&
              time.getTime() < Number(new Date(endTime))
            );
          } else if (endTime) {
            if (this.timeForm.reviewDate2) {
              return time.getTime() > Number(new Date(endTime));
            } else {
              return time.getTime() >= Number(new Date(endTime));
            }
          } else {
            return time.getTime() <= Number(new Date(startTime));
          }
        }
      },
      reviewOptions2: {
        disabledDate: time => {
          let startTime = 0;
          let endTime = 0;
          if (this.timeForm.reviewDate1) {
            startTime = this.timeForm.reviewDate1;
          } else if (this.timeForm.date2) {
            startTime = this.timeForm.date2;
          } else if (this.timeForm.date1) {
            startTime = this.timeForm.date1;
          }
          if (this.timeForm.releaseDate) {
            endTime = this.timeForm.releaseDate;
          }
          if (endTime && startTime) {
            if (this.timeForm.reviewDate1) {
              return !(
                time.getTime() >= Number(new Date(startTime)) &&
                time.getTime() < Number(new Date(endTime))
              );
            } else {
              return !(
                time.getTime() > Number(new Date(startTime)) &&
                time.getTime() < Number(new Date(endTime))
              );
            }
          } else if (endTime) {
            return time.getTime() >= Number(new Date(endTime));
          } else {
            return time.getTime() <= Number(new Date(startTime));
          }
        }
      },
      releaseOptions: {
        disabledDate: time => {
          if (this.timeForm.reviewDate2) {
            return (
              time.getTime() <= Number(new Date(this.timeForm.reviewDate2))
            );
          }
          if (this.timeForm.reviewDate1) {
            return (
              time.getTime() <= Number(new Date(this.timeForm.reviewDate1))
            );
          }
          if (this.timeForm.date2) {
            return time.getTime() <= Number(new Date(this.timeForm.date2));
          }
          if (this.timeForm.date1) {
            return time.getTime() <= Number(new Date(this.timeForm.date1));
          }
        }
      },
      timeRules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        reviewDate1: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        reviewDate2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        releaseDate: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },

  mounted() {
    console.log("applyReca", JSON.parse(localStorage.getItem("applyReca")));
  },
  methods: {
    toNext(numShow, type) {
      this.numShow = numShow;
    },
    toTime() {
      let that = this;
      if (!that.detailsForm.title || !that.detailsForm.details) {
        that.$message.error("请填写必填项");
        return;
      } else {
        that.$refs.detailsForm.validate(valid => {
          if (valid) {
            that.numShow = 2;
          } else {
            return;
          }
        });
      }
    },
    toThere() {
      let that = this;
      console.log(that.timeForm);
      console.log("申请开始时间=", new Date(that.timeForm.date1));
      console.log("申请结束时间=", new Date(that.timeForm.date2));
      console.log("审核开始时间=", new Date(that.timeForm.reviewDate1));
      console.log("审核结束时间=", new Date(that.timeForm.reviewDate2));
      console.log("发布时间=", new Date(that.timeForm.releaseDate));
      var d = new Date(that.timeForm.releaseDate);
      console.log(d);
      var datetime =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      console.log("发布时间转格式=", datetime);

      if (
        !that.timeForm.date1 ||
        !that.timeForm.date2 ||
        !that.timeForm.reviewDate1 ||
        !that.timeForm.reviewDate2 ||
        !that.timeForm.releaseDate
      ) {
        that.$message.error("请填写必填项");
        return;
      } else {
        that.numShow = 3;
      }
    },
    preserveMy() {
      let that = this;
      let applyReca = {
        detailsForm: that.detailsForm,
        timeForm: that.timeForm
      };
      localStorage.setItem("applyReca", JSON.stringify(applyReca));
      that.$message.success("已保存 localStorage 中");
    },
    releaseMy() {
      this.$message.warning("亲，暂时没有地方发布哟");
    },
    //清空编辑内容
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.apply-race {
  .item-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  .content {
    width: 600px;
    margin: 40px auto;
    .demo-ruleForm {
      min-height: 400px;
      .time-middle {
        text-align: center;
      }
    }
    .form-footer {
      width: auto;
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
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
        <el-form
          :model="timeForm"
          ref="timeForm"
          label-width="100px"
          class="demo-ruleForm"
          :rules="timeRules"
        >
          <el-form-item label="报名时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="timeForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line time-middle" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker placeholder="选择时间" v-model="timeForm.date2" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="评审时间" required>
            <el-col :span="11">
              <el-form-item prop="reviewDate1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="timeForm.reviewDate1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line time-middle" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="reviewDate2">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="timeForm.reviewDate2"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
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
        reviewDate2: ""
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
      if (!that.timeForm.date1 || !that.timeForm.date2) {
        that.$message.error("请填写必填项");
        return;
      } else {
        that.$refs.timeForm.validate(valid => {
          if (valid) {
            that.numShow = 3;
          } else {
            return;
          }
        });
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
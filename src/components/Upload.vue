<template>
  <div>
    <input
      type="file"
      name="file"
      :accept="accept"
      class="upload"
      ref="commonUpload"
      @change="loadOut($event)"
    />
  </div>
</template>
<script>
export default {
  props: {
    accept: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log('上传接受的',this.$props)
  },
  methods: {
    loadOut(event) {
      let that = this;
      let fileDom = that.$refs.commonUpload;
      if (fileDom.files.length <= 0) return;
      let file = fileDom.files[0];
      //   console.log(file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.$emit("uploadover", reader.result);
        let content = reader.result;
        content = content.substring(content.indexOf(",") + 1);
        //   console.log(content);
      };
      fileDom.value = null;
      that.$message.success("上传成功");
    }
  }
};
</script>

<style lang="scss" scoped>
.upload {
  opacity: 0;
  width: 100%;
  height: 100%;
  outline: none;
}
</style>
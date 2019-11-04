<template>
  <div id="popup">
    <div class="popup-content">loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#popup {
  width: 100%;
  height: 100%;
  background: rgba(2, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-content {
    width: auto;
    //     //   height: ;/
    color: #001aff;
  }
}
</style>
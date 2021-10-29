<template>
  <div v-if="visible" class="el-message-box__wrapper" style="z-index: 2021">
    <div class="el-message-box">
      <div class="el-message-box__header">
        <div class="el-message-box__title">
          <slot name="header"></slot>
        </div>
        <button type="button" class="el-message-box__headerbtn">
          <i class="el-message-box__close" @click="handleClose">x</i>
        </button>
      </div>
      <div class="el-message-box__content">
        <div class="el-message-box__container">
          <div class="el-message-box__message">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="el-message-box__btns">
        <slot name="footer"></slot>
      </div>
    </div>
    <div v-if="modal" class="v-modal" @click="bodyCloseMenus"></div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    document.addEventListener("keyup", (e) => {
      e.keyCode === 27 && this.closeModal();
    });
  },
  beforeDestroy() {
    document.removeEventListener("keyup");
  },
  methods: {
    handleOpen() {
      this.$emit("update:visible", true);
      this.$emit("open", open);
    },
    handleClose() {
      this.closeModal();
      this.$emit("close", close);
    },
    bodyCloseMenus() {
      this.closeOnClickModal && this.closeModal();
    },
    closeModal() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
<style>
.el-message-box__wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.el-message-box__wrapper:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.el-message-box {
  position: absolute;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.el-message-box__header {
  position: relative;
  padding: 15px 15px 10px;
}

.el-message-box__content {
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}

.el-message-box__btns {
  padding: 5px 15px 0;
  text-align: right;
}

.el-message-box__headerbtn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}

.el-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.el-button--primary.is-active,
.el-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.el-message-box__headerbtn .el-message-box__close {
  color: #909399;
}

.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
</style>

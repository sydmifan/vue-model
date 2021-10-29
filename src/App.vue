<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <modal :visible.sync="visible">
      <div slot="header">标题</div>
      <div>内容内容内容内容内容内容内容内容内容内容内容内容</div>
      <div slot="footer">
        <button class="el-button" type="button"  @click="visible = false">取消</button>
        <button class="el-button el-button--primary" type="button" @click="visible = true"> 确认 </button>
      </div>
    </modal>
    <button
      type="button"
      class="el-button el-button--primary"
      @click="visible = true"
    >
      打开
    </button>
    <button type="button" class="el-button" @click="visible = false">关闭</button>
  </div>
</template>

<script>
import modal from "./components/modal.vue";
export default {
  name: "App",
  components: {
    modal,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
}

.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.el-button + .el-button {
  margin-left: 10px;
}
</style>

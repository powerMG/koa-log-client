<template>
  <div id="info" class="info-main"></div>
  <div class="info-data">
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { graphChart } from "/@/components/echarts/index";
export default {
  setup() {
    const state = reactive({
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
  mounted() {
    graphChart("info");
  },
};
</script>

<style lang="less" scoped>
.info-main {
  position: fixed !important;
  left: 0;
  height: 100%;
  width: 50%;
  box-shadow: rgb(0 0 0 / 45%) 9px 10px 30px;
  padding: 20px;
  margin: -20px;
  overflow: hidden;
}
.info-data {
  width: 45%;
  float: right;
  position: fixed;
  top: 57px;
  right: 20px;
}
</style>

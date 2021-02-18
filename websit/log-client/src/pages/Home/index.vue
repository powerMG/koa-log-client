<template>
  <div class="home-log-chart home-log-line">
    <p class="home-log-doc">近7日信息趋势</p>
    <div id="main" style="height: 300px"></div>
  </div>
  <div class="home-log-chart home-log-bar">
    <p class="home-log-doc">近7日信息量</p>
    <div id="bar" style="height: 300px"></div>
  </div>
  <div class="home-log-chart home-log-pie">
    <p class="home-log-doc">近7日信息模块分布</p>
    <div id="pie" style="height: 300px"></div>
  </div>
  <div class="home-log-chart home-log-data">
    <p class="home-log-doc">数据列表</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="infoData" label="信息量"> </el-table-column>
      <el-table-column prop="errorData" label="错误量"> </el-table-column>
      <el-table-column prop="warningData" label="警告量"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
/* Import Echarts */
import { lineChart, barChart, pieChart } from "/@/components/echarts/index";
export default {
  setup() {
    const tableData = [
      {
        infoData: 10,
        errorData: 28,
        warningData: 46,
      },
      {
        infoData: 101,
        errorData: 238,
        warningData: 16,
      },
      {
        infoData: 0,
        errorData: 128,
        warningData: 14,
      },
    ];
    const state = reactive({
      tableData,
    });

    return {
      ...toRefs(state),
    };
  },
  mounted() {
    lineChart("main", {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["日志信息", "错误信息", "警告信息"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "日志信息",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 634, 90, 230, 210],
          color: "#0089ff",
        },
        {
          name: "错误信息",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 34, 290, 330, 310],
          color: "#FF0000",
        },
        {
          name: "警告信息",
          type: "line",
          stack: "总量",
          data: [150, 232, 501, 154, 190, 330, 410],
          color: "#ffeb00",
        },
      ],
    });
    barChart("bar", {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["日志信息", "错误信息", "警告信息"],
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "日志信息",
          type: "bar",
          data: [12, 132, 101, 634, 90, 30, 10],
          color: "#0089ff",
        },
        {
          name: "错误信息",
          type: "bar",
          data: [120, 13, 1, 34, 0, 230, 210],
          color: "#FF0000",
        },
        {
          name: "警告信息",
          type: "bar",
          data: [10, 12, 10, 64, 9, 20, 20],
          color: "#ffeb00",
        },
      ],
    });
    pieChart("pie", {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "模块分布",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "工作看板" },
            { value: 735, name: "客户列表" },
            { value: 580, name: "客户导入" },
            { value: 484, name: "系统设置" },
            { value: 300, name: "短信营销" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.home-log-chart {
  border-radius: 4px;
  box-shadow: rgba(36, 132, 255, 0.41) 0px 0px 8px;
  margin: 40px 0;
  padding: 20px;
  .home-log-doc {
    margin-bottom: 10px;
    font-weight: bold;
  }
}
.home-log-bar {
  width: 46%;
  float: left;
}
.home-log-pie {
  width: 46%;
  float: right;
}
.home-log-data {
  clear: both;
}
</style>

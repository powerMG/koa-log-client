<template>
  <div>日志信息</div>
  <div id="main" style="height: 300px"></div>
  <div id="bar" style="height: 300px"></div>
  <div id="pie" style="height: 300px"></div>
</template>

<script>
import { lineChart, barChart, pieChart } from "../../components/echarts/index";
export default {
  setup() {},
  mounted() {
    lineChart("main");
    barChart("bar");
    pieChart("pie");
  },
};
</script>

<style></style>

import * as echarts from "echarts/core";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, BarChart, PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart,
  BarChart,
  PieChart,
  CanvasRenderer,
]);
/* 折线统计图 */
const lineChart = (dom, options) => {
  let chartDom = document.getElementById(dom);
  let myChart = echarts.init(chartDom);
  let option = options || {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  option && myChart.setOption(option);
};

/* 柱状图 */
const barChart = (dom, options) => {
  let chartDom = document.getElementById(dom);
  let myChart = echarts.init(chartDom);
  let option = options || {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  option && myChart.setOption(option);
};
/* 饼状图 */
const pieChart = (dom, options) => {
  let chartDom = document.getElementById(dom);
  let myChart = echarts.init(chartDom);
  let option = options || {
    title: {
      text: "某站点用户访问来源",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "搜索引擎" },
          { value: 735, name: "直接访问" },
          { value: 580, name: "邮件营销" },
          { value: 484, name: "联盟广告" },
          { value: 300, name: "视频广告" },
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
  };

  option && myChart.setOption(option);
};
export { lineChart, barChart, pieChart };

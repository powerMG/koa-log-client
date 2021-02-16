module.exports = {
  base: "./",
  optimizeDeps: {
    include: ["echarts/core","echarts/components","echarts/charts","echarts/renderers"],
  },
  proxy: {
    "/passport": {
      target: "http://localhost:8088/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/passport/, ""),
    },
  },
};

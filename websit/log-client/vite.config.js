module.exports = {
  base: "./",
  proxy: {
    "/passport": {
      target: "http://localhost:8088/",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/passport/, '')
    },
  },
};

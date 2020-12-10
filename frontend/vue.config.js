const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  lintOnSave: false,
  // chainWebpack: (config) => {},
  configureWebpack: (config) => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        public: path.resolve(__dirname, "./public"),
        // 'components': path.resolve(__dirname, './src/components'),
        // 'common': path.resolve(__dirname, './src/common'),
        // 'api': path.resolve(__dirname, './src/api'),
        // 'views': path.resolve(__dirname, './src/views'),
        // 'data': path.resolve(__dirname, './src/data')
      },
    };
  },
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      "/api": {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        // target: "http://127.0.0.1:8000/api",
        target: "http://www.web-jshtml.cn/productapi",
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true,
    },
    // before: (app) => {},
  },

  transpileDependencies: ["vuetify"],
};

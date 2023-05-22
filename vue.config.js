const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = defineConfig({
  transpileDependencies: true,
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks:"initial",
          minChunks: 2,
        }
      }
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
    generalStatsFile: true
  })
]
})

module.exports = {
  publicPath: "/"
}
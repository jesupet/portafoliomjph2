const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('pdf-loader')
      .loader('pdf-loader')
      .end();
  }
})
module.exports = {
  publicPath: "https://jesupet.github.io/portafoliomjph2/"
}
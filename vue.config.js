module.exports = {
  publicPath: '/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/index.scss";`
      }
    }
  }
}

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 4836,
  },
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
  config.module
    .rule('js')
    .include
    .add(__dirname + 'packages')  // 注意这里需要绝对路径，所有要拼接__dirname
    .end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      // 修改它的选项...
      return options
    })
  }
}

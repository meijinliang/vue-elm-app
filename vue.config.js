
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {//解决跨域问题
      '/': {
        // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
        // target: 'https://elm.cangdu.org/',
        target: 'http://localhost:8001/', // 本地起的node-elm服务
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  chainWebpack(config) {
    // console.log(config)
    // htmlWebpackPlugin.options.title
    config.plugin('html')
      .tap(args => {
        args[0].title = "饿了么";
        return args;
      })
    
    // webpackConfig.name
    // configureWebpack: {
    //   name: name,
    //   resolve: {
    //     alias: {
    //       '@': resolve('src')
    //     }
    //   }
    // },
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin') // 开启压缩
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
       '/api': {
       target: 'http://zrbridge.top:12505/',
       // ws: true,
        changeOrigin: true,
        pathRewrite: {
        // '^/api': '/api/private/v1/'
          ["^" + "/api"]: "",
        }
      }
    }
  },

  // 优化打包
  // 去除生产环境的productionSourceMap
  productionSourceMap: false,
  configureWebpack: config => {
    // 为生产环境修改配置...
    // 去除console.log打印以及注释
    const plugins = []
    if (isProduction) {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false // 去掉注释
            },
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']// 移除console
            }
          }
        })
      )
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css)$/, // 匹配文件名
          threshold: 10000, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        })
      )
      // 打包时npm包转CDN
      // config.externals = externals
    }
    return { plugins }
  },
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-dev.js')
      /**
       * 添加CDN参数到htmlWebpackPlugin配置中
       */
      config.plugin('html').tap(args => {
        // args[0].cdn = cdn.build
        args[0].title = 'Congin'
        return args
      })
    })
    // 开发阶段
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')
      config.plugin('html').tap(args => {
        // args[0].cdn = cdn.dev
        args[0].title = 'Dev-Congin'
        return args
      })
    })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/style/variable.less')
      ]
    }
  }
}

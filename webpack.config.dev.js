'use strict'
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  resolve: {
    alias: {
      // https://stackoverflow.com/questions/47332728/you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-a?rq=1
      // Vue without the template compiler (needed) is included by default. 
      // To override this default, you need to do this:
        vue: 'vue/dist/vue.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}



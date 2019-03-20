'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      // https://stackoverflow.com/questions/47332728/you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-a?rq=1
      // Vue without the template compiler (needed) is included by default. 
      // To override this default, you need to do this:
        vue: 'vue/dist/vue.js',
        scrollStore: path.resolve(__dirname, './src/components/scrollStore')   // <-- When you build or restart dev-server, you'll get an error if the path to your utils.js file is incorrect.
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
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      'scrollStore': 'scrollStore'
    })
  ]
}



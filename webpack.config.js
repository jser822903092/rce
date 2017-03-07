let { resolve } = require('path');
let { resolvePlugin, resolvePreset } = require('webpack-babel-link');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: 'dist',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      resolve(__dirname, 'node_modules'),
      resolve(__dirname, 'src'),
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        plugins: [
          'transform-es2015-destructuring',
          'transform-object-rest-spread',
        ].map( resolvePlugin(require) ),
        presets: ['react'].map( resolvePreset(require) )
      }
    }]
  },
};

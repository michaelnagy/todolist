const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/sass/main.scss'
         ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
          use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015', 'react', 'stage-2']
            }
          },
          exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/, 
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              loader: ['css-loader','sass-loader'],
              publicPath: '/public'
          })
      },
    ] 
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js']
  },
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    overlay: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      disable: false,
      allChunks: true,
    }),
  ]
};
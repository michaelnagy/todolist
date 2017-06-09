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
      { // js files
        test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
      },
      { // regular css files
        test: /\.(sass|scss)$/, 
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
    hot: true,
    overlay: true
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      disable: false,
      allChunks: true,
    }),
  ]
};
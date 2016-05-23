var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  "css-loader?sourceMap",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&sourceMap=map&includePaths[]=" + path.resolve(__dirname, "./public/bundle"),
];

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/bundle'),
    filename: 'bundle/bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint-loader',
        exclude: ['node_modules']
      }
    ],

    loaders: [
      { test: /\.png$|\.jpg$|\.svg$/, loader: "file-loader?name=img/[name].[ext]" },
      {
        test: /\.scss$|\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")
      },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))},
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

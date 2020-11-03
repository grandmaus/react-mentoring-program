const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve('./dev'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },

  plugins: [isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin()],
};

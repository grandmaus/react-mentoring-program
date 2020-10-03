const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dev')
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.tsx', '.js', '.ts'],
    alias: {
      '@public': path.resolve(__dirname, './public')
    }
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'PiewNews',
      template: 'public/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' }
          },
          'image-webpack-loader'
        ]
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
    config.output.path = path.resolve(__dirname, 'dev');
    config.devServer.contentBase = path.join(__dirname, 'build');
    config.devServer.port = 8000;
  }

  return config;
};

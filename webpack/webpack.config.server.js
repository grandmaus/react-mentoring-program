const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: ['@babel/polyfill', './src/serverRenderer.tsx'],
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.tsx',
    libraryTarget: 'commonjs2',
  },
});

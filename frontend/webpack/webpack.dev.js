const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyser = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  devServer: {
    port: 3000,
     proxy: {
      '/oauth2/authorization/azure': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/login': '' },
        secure: false,
      },
      '/login/oauth2/code': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/home': '' },
        secure: false,
      },
      
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new BundleAnalyser(),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
}

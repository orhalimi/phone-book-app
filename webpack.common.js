const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: `${__dirname}/app/js/app.jsx`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[hash].[ext]',
      //     },
      //   },
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/build`,
  },
  plugins: [HTMLWebpackPluginConfig, new CleanWebpackPlugin(['build'])],
};

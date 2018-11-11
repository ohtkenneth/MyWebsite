const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      // }
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
}
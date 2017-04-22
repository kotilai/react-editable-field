var webpack = require('webpack');
const path = require('path');

var isBuild = process.env.WEBPACK_ENV === 'build' ? true : false;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'EditableField' + (isBuild ? '.min.js' : '.js'),
    library: 'EditableField',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    }]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: !isBuild ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};

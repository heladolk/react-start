let path = require('path')
let node_modules = path.resolve(__dirname, 'node_modules')

var PROD = JSON.stringify(JSON.parse(process.env.PROD_DEV || 'false')) === 'true';

console.log('* Starting Webpack');
console.log('* PROD = ' + PROD);

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: 'js/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
}

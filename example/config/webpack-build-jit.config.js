var path = require('path');
var webpack = require('webpack');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false
  },
  entry: {
    app: [
      './src/polyfills.ts',
      './src/main.ts'
    ]
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].css.map',
    path: path.join(__dirname, '../dist'),
    publicPath: 'https://zefoy.github.io/ngx-quill-wrapper/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'angular2-template-loader'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'src/tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      },

      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },

      {
        test: /\.(html|css)$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts' ],
    modules: [ '../src', path.join(__dirname, '../node_modules') ]
  },
  plugins: [
    new UglifyJSPlugin({
      include: /\.min\.js$/
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CopyWebpackPlugin([{
      context: './src/assets',
      from: '**/*',
      to: '../dist/assets'
    }]),

    new webpack.ContextReplacementPlugin(
      /@angular(\\|\/)core(\\|\/)/,
      path.join(__dirname, '../src')
    )
  ]
};

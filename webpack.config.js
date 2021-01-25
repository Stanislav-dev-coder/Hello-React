const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

babelOptions = preset => {
  const opts = {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
    script: './script.js'
  },
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
      test: /\.(png|jpg|svg|gif)$/,
      use: ['file-loader']
      },
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
      loader: 'babel-loader',
      options: babelOptions()
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: babelOptions('@babel/preset-react')
          }
        }
    ]
  }
};

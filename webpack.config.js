const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LIB_PREFIX = 'adpl'
module.exports = {
  mode: 'development',
  devServer: {
       contentBase: './dist',
  },
  entry: {main: './main.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/, use: [
          'ts-loader'
        ]
      },
      
      //   {
      //     test: /\.html$/, exclude: /node_modules/,
      //     use: {
      //         loader: 'file-loader'
      //     }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lion webcomponent library',
      prefix: LIB_PREFIX,
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    
  ],
  optimization:{
    minimize: false, // <---- disables uglify.
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      }
    }
  }
};
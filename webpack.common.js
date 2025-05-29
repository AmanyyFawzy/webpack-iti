const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/home.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/home.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ],
    module:{
    rules:[
      //for css in webpack
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      // for img in html
      {
        test:/\.html$/i,
        use:['html-loader']
      },
      //for img in js
      {
        test: /\.jpg$/i,
        type:"asset/resource"
      },
      //for font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }

    ]
  }
};

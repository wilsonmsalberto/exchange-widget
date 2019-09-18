const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      context: path.resolve(__dirname, 'src/context/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      state: path.resolve(__dirname, 'src/state/'),
      ui: path.resolve(__dirname, 'src/ui/'),
      views: path.resolve(__dirname, 'src/views/'),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({ template: './src/index.html' }),
  ],
});

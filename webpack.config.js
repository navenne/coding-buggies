const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      title: 'Coding Buggies',
      inject: 'body'
    }),
  ],
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, "dist"),
  }
};

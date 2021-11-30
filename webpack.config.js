const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './template.html',
      title: 'Coding Buggies',
      inject: 'body'
    }),
  ],
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, "public"),
  }
};

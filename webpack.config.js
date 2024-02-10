const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const path = require("path");

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      images: path.resolve(__dirname, "./src/assets/images"),
      components: path.resolve(__dirname, "./src/components"),
      reduxDir: path.resolve(__dirname, "./src/redux"),
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
      filename: "index.html",
      manifest: "./public/manifest.json",
    }),
    new MiniCssExtractPlugin({
      filename: "static/style/[name].[hash].css",
      chunkFilename: "static/style/[name].[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "css-unicode-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      /* {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*$|$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 50000,
              mimetype: "application/font-woff",
              name: "[name].[hash].[ext]",
              outputPath: "static/font/",
              publicPath: (url) => `../font/${url}`,
            },
          },
        ],
      }, */
      {
        test: /\.(svg)(\?.*$|$)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "static/icon/",
              publicPath: (url) => `../static/icon/${url}`,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // ?name=[name].[ext] is only necessary to preserve the original file name
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  mode: "development", // or 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};

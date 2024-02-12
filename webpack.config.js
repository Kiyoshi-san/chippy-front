const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const openBrowser = require("react-dev-utils/openBrowser");

const devMode = process.env.NODE_ENV !== "production";

const path = require("path");

let PORT = 3001;

module.exports = {
  mode: "development", // or 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
    assetModuleFilename: "[name].[ext]",
  },
  devtool: devMode ? "source-map" : "", // Source map mostra a linha do erro no arquivo
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: PORT,
    open: false,
    hot: true,
    onListening: function (devServer) {
      const { port } = devServer.server.address();
      openBrowser(`http://localhost:${port}`); // when we start the server it will open the same tab if it already exists
    },
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"], // This allows you to simplify your imports by omitting the file extension:
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
      filename: "[name].css",
      chunkFilename: "[id].css",
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
        // include: [path.resolve(__dirname, "src", "scss")], // sem esse loader estava dando erro na lib do carrossel: react multi carousel Module parse failed: Unexpected character '@'
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader", // 2. Turns css into commonjs
          },
          {
            loader: "sass-loader", // 1. Turns sass into css
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
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)(\?.*$|$)/,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        type: "asset/resource", // para o background-image no sass estava encontrando o caminho da imagem pelo root no sass, mas no browser não carregava, com esse type asset/resource funcionou
      },
    ],
  },
};

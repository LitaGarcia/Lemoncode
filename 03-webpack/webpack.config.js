import HtmlWebpackPlugin  from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ],
      },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'blocking'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
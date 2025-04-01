// webpack.config.js
import HtmlWebpackPlugin from "html-webpack-plugin";
import {resolve} from "path";

export default {
    // Required for all projects
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: resolve(process.cwd(), "dist"),
        clean: true,
    },
    // Source map for better debugging
    devtool: "eval-source-map",
    // Automatically reloads when JavaScript or watched files change
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        // Bundle HTML file
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
};

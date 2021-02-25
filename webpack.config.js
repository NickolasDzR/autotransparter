import path from "path";
import webpack from "webpack";
import copyFiles from "copy-webpack-plugin";
import RemovePlugin from "remove-files-webpack-plugin";
import yargs from "yargs";

let argv = yargs.argv,
    mode = !!argv.production;

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            Promise: "es6-promise-promise",
        }),
    ],

    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { modules: false, "targets": {"ie": "11"} }]
                        ]
                    }
                }
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "webpack-remove-block-loader",
                        options: {
                            active: true,
                            blocks: [mode === true ? "devblock": "prodblock"],
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components"),
        }
    }
};
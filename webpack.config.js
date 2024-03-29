const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3005,
        historyApiFallback: true,
    }
}

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*!********************!*\
  !* Version standard *!
  \********************/

//const handler = (percentage, message, ...args) => {
//    // e.g. Output each progress message directly to the console:
//    console.info(percentage, message, ...args);
//  };

/*!*********************!*\
  !* Version configuré *!
  \*********************/

const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
    console.info(`${percent}%`, msg, argsOrDefault);
  };

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.ProgressPlugin(handler),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'webpack 4 :)',
            template: './src/index.html'
        })
    ]
};
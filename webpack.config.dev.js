const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname , 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js' , '.jsx'],
        alias: {
			src: path.resolve(__dirname, 'src/'),
            Config: path.resolve(__dirname, 'src/env.js'),
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TO-DO react de Ale',
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "icons"),
                    to: "icons"
                }
            ]
        }),
        new Dotenv(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3000
    }
}








// module.exports = ( env ) =>  {

//     const isProduction = env.NODE_ENV === 'production';
//     const dotenvFilename = isProduction ? '.env.production' : '.env.development';

//     // const isProduction = env.NODE_ENV === 'production';
//     // const envFile = isProduction ? '.env.production' : '.env.development';
//     // const envPath = path.resolve(__dirname, envFile);
//     // const envVars = require('dotenv').config({ path: envPath }).parsed || {};
  

//     return {
//         entry: './src/index.js',
//         output: {
//             path: path.resolve( __dirname , 'dist'),
//             filename: 'bundle.js',
//             publicPath: '/',
//         },
//         resolve: {
//             extensions: ['*', '.js' , '.jsx'],
//             alias: {
//                 src: path.resolve(__dirname, 'src/'),
//                 Config: path.resolve(__dirname, 'src/env.js'),
//             }
//         },
//         mode: 'development',
//         module: {
//             rules: [
//                 {
//                     test: /\.(js|jsx)$/,
//                     exclude: /node_modules/,
//                     use: {
//                         loader: 'babel-loader'
//                     }
//                 },
//                 {
//                     test: /\.html$/,
//                     use: [
//                         { loader: 'html-loader' }
//                     ]
//                 },
//                 {
//                     test: /\.s[ac]ss$/,
//                     use: [
//                         'style-loader',
//                         'css-loader',
//                         'sass-loader'
//                     ]
//                 },
//                 {
//                     test: /\.(png|svg|jpg|jpeg|gif)$/,
//                     type: "asset/resource"
//                 },
//                 {
//                     test: /\.svg$/,
//                     use: ['@svgr/webpack'],
//                 },
//             ]
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 title: 'TO-DO react de Ale',
//                 template: './public/index.html',
//                 filename: './index.html'
//             }),
//             new MiniCssExtractPlugin({
//                 filename: '[name].css'
//             }),
//             new CopyPlugin({
//                 patterns: [
//                     {
//                         from: path.resolve(__dirname, "public", "icons"),
//                         to: "icons"
//                     }
//                 ]
//             }),
//             new Dotenv(),
//             new webpack.DefinePlugin({
//               'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
//             }),
//         ],
//         devServer: {
//             static: {
//                 directory: path.join(__dirname, 'dist'),
//             },
//             compress: true,
//             historyApiFallback: true,
//             port: 3000
//         }
//     }
// }
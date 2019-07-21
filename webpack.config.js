const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         rules: [
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',  
              options: {minimize:true}            
            }
          },
           {
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
               loader: 'babel-loader',
            }
          },
          {
             test:/\.css$/,
             use:['style-loader','css-loader']
          },
          {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
              {
               loader: 'file-loader',
               options: {
                  outputPath: 'images',
                  name: '[name].[ext]',               
                },
              }   
            ]           
          }, 
         ]
       },
       plugins: [
   //      new CleanWebpackPlugin(),
         new CopyWebpackPlugin([
         {from: 'src/assets', 
          to:'assets'
         }
         ]),
         new CopyWebpackPlugin([
          {from: 'src/dep', 
           to:''
          }
          ]),
         new HtmlWebPackPlugin({
           template: "./src/index.html",
           filename: "./index.html"
         })
        ],
        devServer: {
          contentBase: path.join(__dirname, 'dist'),
          compress: true,
          port: 9000
        }
}
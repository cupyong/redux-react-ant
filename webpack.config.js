//一个常见的Webpack配置文件
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/client/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve : {
        extensions : ['', '.js', '.jsx']
    },
     //Server Configuration options
  devServer:{
    contentBase: 'src',  //Relative directory for base of server
    hot: true,        //Live-reload
    inline: true,
    port: 9000,        //Port Number
    host: '0.0.0.0',  //Change to '0.0.0.0' for external facing server
    historyApiFallback: true
    //proxy /api/* to a node server
    
  },
   module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'antd'],
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test    : /\.less$/,
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.css$/, // Only .css files
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*)?$/,   loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      { test: /\.svg(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
      /* eslint-enable */
    ]
  },
    plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin()
    // //Enables Hot Modules Replacement
    // new webpack.HotModuleReplacementPlugin(),
    // //Allows error warnings but does not stop compiling. Will remove when eslint is added
    // new webpack.NoErrorsPlugin(),
   ],
  
   
}

var path = require('path')
    , fs = require('fs')
    , webpack = require('webpack')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
    , BowerWebpackPlugin = require("bower-webpack-plugin")
    , I18nPlugin = require("i18n-webpack-plugin")
    ;

/*
var languages = {
	"en": null
	, "cn": require("./src-webpack/static/js/i18n/cn.json")
};
*/

var entry = {
        "index": "./src-webpack/static/js/index.js"
    }
    , chunks = Object.keys(entry)
    ;

var config = {

    entry: entry

    , output: {
        path: __dirname + '/src/static/js/',
        filename: "[name].js"
    }

    , module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
            , { test: /\.json$/, loader: "json-loader" }
            , { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM&harmony" }
			, { test: /\.tpl$/, loader: "underscore-template-loader" }
			, { test: /\.jpg$/, loader: "file-loader" },
			, { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
        ]
    }
    , externals: {
        'react': 'React'
        , 'react-dom': 'ReactDOM'
        , 'jquery': '$'
        , 'zepto': '$'
    }
    , resolve: {
        extensions: ['', '.js', '.jsx']
        , alias: {
            'swfobject': __dirname + '/bower_components/swfobject-amd/swfobject.js'
        }

    }
    , plugins: [
        new BowerWebpackPlugin({
          excludes: /.*\.less/
        })
        , new webpack.ProvidePlugin({ 
            $: 'jquery'
        })
        , new CommonsChunkPlugin({
            name: 'vendors', 
            chunks: chunks, 
            minChunks: chunks.length 
        })
        , new webpack.ProvidePlugin({
          $:      "jquery"
          , jQuery: "jquery"
          , Zepto: "zepto"
          , React: "react"
          , ReactDOM: "react-dom"
        })
        , new ExtractTextPlugin('[name].css')
        , new webpack.HotModuleReplacementPlugin() 
		/*
        , new I18nPlugin(
            languages[ 'cn' ]
        )
		*/
    ]
}


foreachFolder('./src-webpack/',function(list){
	for(var i = 0,item; item = list[i++];){
		if(item[0].slice(-5)=='.html'){
			var name = item[0].slice(0,-5);
			config.plugins.push(new HtmlWebpackPlugin({ 
				filename: '../../' + name + '.html', 
				template: './src-webpack/' + name + '.html', 
				inject: true, 
				hash: true 
                , chunks: ['vendors', name]
			}));
		}
	}
});


module.exports = config;

function foreachFolder(path, cb){
    var folder_exists = fs.existsSync(path);
    var fileList = [];
    if(folder_exists == true)
    {
       var dirList = fs.readdirSync(path);
       dirList.forEach(function(fileName){
            fileList.push([fileName, path , path+fileName]);
       });
    };
    return cb(fileList);
}


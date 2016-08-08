
var path = require('path')
    , fs = require('fs')
	, dir = './output/'
    ;

foreachFolder( dir,function(list){
	for(var i = 0,item; item = list[i++];){
		if(item[0].slice(-5)=='.html'){
			var path = dir + item[0];

			var data = fs.readFileSync( path,"utf-8");  
			data = data.replace( /\([\d]+).qhimg\.com/g, '$1.ssl.qhimg.com' );
			fs.writeFileSync( path, data );
		}
	}
});


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


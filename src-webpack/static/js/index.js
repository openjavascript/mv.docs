

var V = require( 'mv.js' )
    , Const = require( './const.js' )
    , data = require( '../json/category.js' )
    ;

    require( '../jsx/index/index.jsx' )


Const.trigger( Const.initPage, [ data ] );

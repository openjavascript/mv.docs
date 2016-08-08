

var V = require( 'mv.js' )
    , Const = require( 'mv.const.js' )
    , r = $.extend( true, Const, {
            index: {
                defaultDesc: '该应用没有添加描述'
            }
            , initPage: 'onInitPage'
        }, window.defaultConst || {} )
    ;
module.exports = r;

console.log( 1 );

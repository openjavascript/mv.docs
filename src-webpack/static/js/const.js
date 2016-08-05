

var V = require( 'mv.js' )
    , Const = require( 'mv.const.js' )
    , r = $.extend( true, Const, {
            index: {
                defaultImg: './static/img/default_item.jpg'
                , defaultDesc: '该应用没有添加描述'
            }
            , initPage: 'onInitPage'
        } )
    ;
module.exports = r;


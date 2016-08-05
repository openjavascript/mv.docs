webpackJsonp([1,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	

	var V = __webpack_require__( 1 )
	    , Const = __webpack_require__( 4 )
	    , data = __webpack_require__( 13 )
	    ;

	    __webpack_require__( 14 )


	Const.trigger( Const.initPage, [ data ] );


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	    /** @namespace V */
	    !window.V && ( window.V = {} );

	    $.extend( true, V, {
	        /** 
	         * 全局常量命名空间
	         * <br />v.js 里所有的操作都通过 V.Const 的事件名进行触发
	         * @see {@link v.module.const}
	         * @namespace V#Const 
	         */
	        Const: V.Const || {}
	        /**
	         * @name V#ZINDEX
	         * @type Int
	         * @default 1000
	         */
	        , ZINDEX: 1000
	        /**
	         * $( document.documentElement )
	         * @name V#HTML
	         * @type Selector
	         */
	        , HTML: $( document.documentElement ),      JHTML: $( document.documentElement )
	        /**
	         * $( document )
	         * @namespace V#DOC
	         */
	        , DOC: $( document ),                       JDOC: $( document )
	        /**
	         * $( document.body )
	         * @name V#BODY
	         * @type Selector
	         */
	        , BODY: $( document.body ),                 JBODY: $( document.body )
	        /**
	         * $( window )
	         * @namespace V#WIN
	         */
	        , WIN: $( window ),                         JWIN: $( window )
	        /** @namespace V#app */
	        , app: V.app || {
	            /**
	             * @name V#app#prefix
	             * @type String
	             * @default  app_prefix_
	             */
	            prefix: 'app_prefix_'
	            /**
	             * 给输入字符串添加 前后缀, 防止命名冲突
	             * @method getPrefixVal
	             * @param {String} _v 
	             * @return {String}
	             * @memberof V#app
	             */
	            , getPrefixVal:
	                function( _v ){
	                    return V.utils.printf( '{0}_{1}_{2}', V.app.prefix, V.app.iotId, _v );
	                }
	        }
	        /** @namespace V#utils */
	        , utils: {
	            getMobileOperatingSystem: getMobileOperatingSystem
	            , detectCommand: detectCommand
	            , getNumberValue: getNumberValue
	            , getStringValue: getStringValue
	            , printf: printf
	            , printKey: printKey
	            , formatDate: formatDate
	            , parseFinance: parseFinance
	            , parseBool: parseBool
	            , padChar: padChar
	            , parentSelector: parentSelector
	            , isDecimal: isDecimal
	            , isMoney: isMoney
	            , cloneObject: cloneObject

	            , "delUrlParam": delUrlParam
	            , "delUrlParams": delUrlParams
	            , "getUrlParam": getUrlParam
	            , "getUrlParams": getUrlParams
	            , "hasUrlParam": hasUrlParam
	            , 'urlHostName': urlHostName
	            , "addUrlParams": addUrlParams
	            , "getAllUrlParams": getAllUrlParams
				, "scriptContent": scriptContent
	            , "ts": function(){ return new Date().getTime(); }

				, winSize: winSize

	        } 
	        /** @namespace V#is */
	        , is: {
	            wexin: isWeiXin()
	            /**
	             * 判断客户端是否为微信
	             * @name weixin
	             * @type {boolean}
	             * @memberof V#is
	             */
	            , weixin: isWeiXin()
	            , debug: parseBool( getUrlParam(  'fe_debug' ) )

	        }
	        , T: {}
	    });
	    /**
	     * 获取脚本模板的内容
	     * @method  scriptContent
	     * @param   {selector}  _selector
	     * @return  string
	     * @static
	     */
	    function scriptContent( _selector ){
	        var _r = '';
	        _selector 
	            && ( _selector = $( _selector ) ).length 
	            && ( _r = _selector.html().trim().replace( /[\r\n]/g, '') )
	            ;
	        return _r;
	    }
	    /**
	     * 获取 window 的 相关大小
	     * @method  winSize
	     * @param   {window}    _win,  default = window
	     * @return  Object
	     * @static
	     */
	    function winSize( _win ){
	        _win = $( _win || window );
	        var _r = {
	                width: _win.width()
	                , height: _win.height()
	                , scrollLeft: _win.scrollLeft()
	                , scrollTop: _win.scrollTop()
	            };
	        _r.viewportX = _r.scrollLeft;
	        _r.maxViewportX = _r.scrollLeft + _r.width;
	        _r.viewportY = _r.scrollTop;
	        _r.maxViewportY = _r.scrollTop + _r.height;
	        return _r;
	    }
	    /**
	     * 取 URL 的 host name
	     * @method  urlHostName
	     * @param   {string}    _url
	     * @return  string
	     * @static
	     */
	    function urlHostName( _url ){
	        var _r = '', _url = _url || location.href;
	        if( /\:\/\//.test( _url ) ){
	            _url.replace( /^.*?\:\/\/([^\/]+)/, function( $0, $1 ){
	                _r = $1;
	            });
	        }
	        return _r;
	    }
	    /**
	     * 把 URL 相对路径 转换为 绝对路径
	     * @method  relativePath
	     * @param   {string}    _path
	     * @param   {string}    _url
	     * @return  string
	     * @static
	     */
	    function relativePath( _path, _url ){
	        _url = _url || document.URL;
	        _url = _url.replace(/^.*?\:\/\/[^\/]+/, "").replace(/[^\/]+$/, "");
	        if(!_path){return _url;}  
	        if(!/\/$/.test(_url)){_url += "/";}

	        if(/(^\.\.\/|^\.\/)/.test(_path)){
	            var Re = new RegExp("^\\.\\.\\/"), iCount = 0;    
	            while(Re.exec(_path)!=null){
	                _path = _path.replace(Re, "");
	                iCount++;
	            }       
	            for(var i=0; i<iCount; i++){_url = _url.replace(/[^\/]+\/$/, "");}    
	            if(_url=="") return "/";  
	            _path = _path.replace(/^\.\//, ""); 
	            _path.replace( /\/\/$/, '/' );
	            return _url+_path;
	        }   
	        return _path;
	    }

	    /**
	     * 取URL参数的值
	     * <br /><b>require:</b> filterXSS
	     * @method  getUrlParam
	     * @param   {string}    _url
	     * @param   {string}    _key
	     * @return  string
	     * @static
	     * @example
	            var defaultTag = getUrlParam(location.href, 'tag');  
	     */ 
	    function getUrlParam( _url, _key ){
	        var _r = '', _ar, i, _items;
	        !_key && ( _key = _url, _url = location.href );
	        _url.indexOf('#') > -1 && ( _url = _url.split('#')[0] );
	        if( _url.indexOf('?') > -1 ){
	            _ar = _url.split('?')[1].split('&');
	            for( i = 0; i < _ar.length; i++ ){
	                _items = _ar[i].split('=');
	                _items[0] = decodeURIComponent( _items[0] || '' ).replace(/^\s+|\s+$/g, '');
	                if( _items[0].toLowerCase() == _key.toLowerCase() ){
	                    _r = filterXSS( _items[1] || '' );
	                    break;
	                } 
	            }
	        }
	        return _r;
	    }
	    /**
	     * 取URL参数的值, 这个方法返回数组
	     * <br />与 getUrlParam 的区别是可以获取 checkbox 的所有值
	     * <br /><b>require:</b> filterXSS
	     * @method  getUrlParams
	     * @param   {string}    _url
	     * @param   {string}    _key
	     * @return  Array
	     * @static
	     * @example
	            var params = getUrlParams(location.href, 'tag');  
	     */ 
	    function getUrlParams( _url, _key ){
	        var _r = [], _params, i, j, _items;
	        !_key && ( _key = _url, _url = location.href );
	        _url = _url.replace(/[\?]+/g, '?').split('?');
	        if( _url.length > 1 ){
	            _url = _url[1];
	            _params = _url.split('&');
	            if( _params.length ){
	                for( i = 0, j = _params.length; i < j; i++ ){
	                    _items = _params[i].split('=');
	                    _items[0] = decodeURIComponent( _items[0] ) || '';
	                    if( _items[0].trim() == _key ){
	                        _r.push( filterXSS( _items[1] || '' ) );
	                    }
	                }
	            }
	        }
	        return _r;
	    }
	    function getAllUrlParams( _url ){
	        var _r = {}, _params, i, j, _items;
	        _url = _url || location.href;
	        _url = _url.replace(/[\?]+/g, '?').split('?');
	        if( _url.length > 1 ){
	            _url = _url[1];
	            _params = _url.split('&');
	            if( _params.length ){
	                for( i = 0, j = _params.length; i < j; i++ ){
	                    _items = _params[i].split('=');
	                    _items[0] = decodeURIComponent( _items[0] ) || '';
	                    if( _items[0].trim() ){
	                        _r [ _items[0] ] =  filterXSS( _items[1] || '' ); 
	                    }
	                }
	            }
	        }
	        return _r;
	    }


	    /**
	     * 删除URL参数
	     * <br /><b>require:</b> filterXSS
	     * @method  delUrlParam
	     * @param  {string}    _url
	     * @param  {string}    _key
	     * @return  string
	     * @static
	     * @example
	            var url = delUrlParam( location.href, 'tag' );
	     */ 
	    function delUrlParam( _url, _key ){
	        var sharp = '', params, tmpParams = [], i, item;
	        !_key && ( _key = _url, _url = location.href );
	        _url.indexOf('#') > -1 && ( sharp = _url.split('#')[1], _url = _url.split('#')[0] );
	        if( _url.indexOf('?') > -1 ){
	            params = _url.split('?')[1].split('&');
	            _url = _url.split('?')[0];
	            for( i = 0; i < params.length; i++ ){
	                var items = params[i].split('=');
	                items[0] = items[0].replace(/^\s+|\s+$/g, '');
	                if( items[0].toLowerCase() == _key.toLowerCase() ) continue;
	                tmpParams.push( items.join('=') )
	            }
	            _url += '?' + tmpParams.join('&');
	        }
	        sharp && ( _url += '#' + sharp );
	       _url = filterXSS( _url );
	        return _url;
	    }
	    /**
	     * 批量删除URL参数
	     * <br /><b>require:</b> delUrlParam
	     * @method  delUrlParams
	     * @param  {string}    _url
	     * @param  {Array}    _keys
	     * @return  string
	     * @static
	     * @example
	            var url = delUrlParam( location.href, [ 'k1', 'k2' ] );
	     */ 
	    function delUrlParams( _url, _keys ){
	        !_keys && ( _keys = _url, _url = location.href );
	        for( var k in _keys ) _url = delUrlParam( _url, _keys[ k ] );
	        return _url;
	    }
	    /**
	     * 判断URL中是否有某个get参数
	     * @method  hasUrlParam
	     * @param   {string}    _url
	     * @param   {string}    _key
	     * @return  bool
	     * @static
	     * @example
	     *      var bool = hasUrlParam( 'getkey' );
	     */
	    function hasUrlParam( _url, _key ){
	        var _r = false;
	        if( !_key ){ _key = _url; _url = location.href; }
	        if( /\?/.test( _url ) ){
	            _url = _url.split( '?' ); _url = _url[ _url.length - 1 ];
	            _url = _url.split('&');
	            for( var i = 0, j = _url.length; i < j; i++ ){
	                if( _url[i].split('=')[0].toLowerCase() == _key.toLowerCase() ){ _r = true; break; };
	            }
	        }
	        return _r;
	    }
	    /**
	     * 添加URL参数
	     * <br /><b>require:</b> delUrlParam, filterXSS
	     * @method  addUrlParams
	     * @param   {string}    _url
	     * @param   {object}    _params
	     * @return  string
	     * @static
	     * @example
	            var url = addUrlParams( location.href, {'key1': 'key1value', 'key2': 'key2value' } );
	     */ 
	    function addUrlParams( _url, _params ){
	        var sharp = '';
	        !_params && ( _params = _url, _url = location.href );
	        _url.indexOf('#') > -1 && ( sharp = _url.split('#')[1], _url = _url.split('#')[0] );
	        for( var k in _params ){
	            _url = delUrlParam(_url, k);
	            _url.indexOf('?') > -1 
	                ? _url += '&' + k +'=' + _params[k]
	                : _url += '?' + k +'=' + _params[k];
	        }
	        sharp && ( _url += '#' + sharp );
	        _url = filterXSS( _url.replace(/\?\&/g, '?' ) );
	        return _url;   

	    }
	    /**
	     * xss 过滤函数
	     * @method filterXSS
	     * @param   {string}    _s
	     * @return string
	     * @static
	     */
	    function filterXSS( _s ){
	        _s && (
	            _s = _s
	                    .replace( /</g, '&lt;' )
	                    .replace( />/g, '&gt;' )
	        );
	        return _s;
	    }


	    function isWeiXin(){ 
	        var ua = window.navigator.userAgent.toLowerCase(); 
	        if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
	            return true; 
	        }else{ 
	            return false; 
	        } 
	    } 
	    /**
	     * 保存数据到 Selector, 可以为非字符串内容
	     * @method rawData
	     * @param {String} _k 
	     * @param {*} _v 
	     * @return {*}
	     * @memberof Zepto
	     */
	    $.fn.rawData =
	        function( _k, _v ){
	            var _selector = $( this ), _r = _v;

	            _selector.each( function( _sk, _sv ){
	                _sv.rawDataEx = _sv.rawDataEx || {};
	                if( _k ){
	                    typeof _v != 'undefined' && ( _sv.rawDataEx[ _k ] = _v );
	                    !_sk && ( _r = _sv.rawDataEx[ _k ] );
	                }
	            });

	            return _r;
	        };

	    /**
	     * 深度克隆对象, 使用 JSON.stringify
	     * @method  cloneObject
	     * @param   {Object}    _obj
	     * @return  Object
	     * @memberof V#utils
	     */
	    function cloneObject( _obj ){
	        return JSON.parse( JSON.stringify( _obj ) );
	    }
	    /**
	     * 获取数值的值, 如果为空返回 '-'
	     * @method  getNumberValue
	     * @param   {*}    _v
	     * @return  {String|Number}
	     * @memberof V#utils
	     */
	    function getNumberValue( _v ){
	        var _r = '-';
	        if( typeof _v == 'string' || ( typeof _v == 'number' && !isNaN( _v ) ) ){
	            _r = _v;
	        }
	        return _r;
	    }
	    /**
	     * 获取字符串的值, 如果为空返回 '-'
	     * @method  getStringValue
	     * @param   {*}    _v
	     * @return  {String}
	     * @memberof V#utils
	     */
	    function getStringValue( _v ){
	        var _r = '-';
	        if( typeof _v == 'string' || typeof _v == 'number' ){
	            _r = _v.toString();
	        }
	        return _r;
	    }
	    /**
	     * js 附加字串函数
	     * @method  padChar
	     * @param   {string}    _str
	     * @param   {intl}      _len
	     * @param   {string}    _char
	     * @return  string
	     * @memberof V#utils
	     */
	    function padChar( _str, _len, _char ){
	        _len  = _len || 2; _char = _char || "0"; 
	        _str += '';
	        if( _str.length >= _len ) return _str;
	        _str = new Array( _len + 1 ).join( _char ) + _str
	        return _str.slice( _str.length - _len );
	    }
	    /**
	     * 从字符串解析变量值
	     * <br />变量值层级关系以 "." 为分隔
	     * <br />根变量必须为 window
	     * @method  detectCommand
	     * @param   {string}    _cmd
	     * @return  string
	     * @memberof V#utils
	     */
	    function detectCommand( _cmd ){
	        var _r = _cmd, _tmp, _done;
	        
	        if( /\./.test( _r ) ){
	            _tmp = window;
	            _done = true;
	            _r = _r.split( '.' );
	            $.each( _r, function( _k, _v ){
	                if( !_v ){ _done = false; return false; }
	                if( !( _tmp = _tmp[ _v ] ) ){ _done = false; return false; }
	            });
	            _done && _tmp && ( _cmd = _tmp );
	        }

	        return _cmd;
	    }
	    /**
	     * 格式化日期为 YYYY-m-d 格式
	     * <br /><b>require</b>: pad\_char\_f
	     * @method  formatDate
	     * @param   {date}                  _date       要格式化日期的日期对象
	     * @param   {string|undefined}      _split      定义年月日的分隔符, 默认为 '-'
	     * @return  string
	     * @memberof V#utils
	     *
	     */
	    function formatDate( _date, _split ){
	        _date = _date || new Date(); typeof _split == 'undefined' && ( _split = '-' );
	        return [ _date.getFullYear(), _date.getMonth() + 1, _date.getDate() ].join(_split);
	    }
	    /**
	     * Determine the mobile operating system.
	     * This function either returns 'iOS', 'Android' or 'unknown'
	     * @method getMobileOperatingSystem
	     * @returns {String}
	     * @memberof V#utils
	     */
	    function getMobileOperatingSystem() {
	        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	        if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
	        {
	            return 'iOS';

	        }
	        else if( userAgent.match( /Android/i ) )
	        {

	            return 'Android';
	        }
	        else
	        {
	            return 'unknown';
	        }
	    }
	     /**
	     * 按格式输出字符串
	     * @method printf
	     * @param   {string}    _str
	     * @return  string
	     * @memberof V#utils
	     * @example
	     *      printf( 'asdfasdf{0}sdfasdf{1}', '000', 1111 );
	     *      //return asdfasdf000sdfasdf1111
	     */
	    function printf( _str ){
	        for(var i = 1, _len = arguments.length; i < _len; i++){
	            _str = _str.replace( new RegExp('\\{'+( i - 1 )+'\\}', 'g'), arguments[i] );
	        }
	        return _str;
	    }
	     /**
	     * 按格式输出字符串
	     * @method printKey
	     * @param   {string}    _str
	     * @param   {object}    _keys
	     * @return  string
	     * @memberof V#utils
	     * @example
	     *      JC.f.printKey( 'asdfasdf{key1}sdfasdf{key2},{0}', { 'key1': '000', 'key2': 1111, '0': 222 );
	     *      //return asdfasdf000sdfasdf1111,222
	     */
	    function printKey( _str, _keys ){
	        for( var k in _keys ){
	            _str = _str.replace( new RegExp('\\{'+( k )+'\\}', 'g'), _keys[k] );
	        }
	        return _str;
	    }

	    /**
	     * 取小数点的N位
	     * <br />JS 解析 浮点数的时候，经常出现各种不可预知情况，这个函数就是为了解决这个问题
	     * @method  parseFinance
	     * @param   {number}    _i
	     * @param   {int}       _dot  default = 2
	     * @return  number
	     * @memberof V#utils
	     */
	    function parseFinance( _i, _dot ){
	        _i = parseFloat( _i ) || 0;
	        typeof _dot == 'undefined' && ( _dot = 2 );
	        _i && ( _i = parseFloat( _i.toFixed( _dot ) ) );
	        return _i;
	    }
	    /**
	     *  判断数值是否为十进制 
	     * @method  isDecimal
	     * @param   {number}    _n
	     * @return  Boolean
	     * @memberof V#utils
	     */
	    function isDecimal( _n ){
	        var _r = true;
	        if( typeof _n == 'string' ){
	            _n = _n.trim();
	            ( /^(?:[0]{2,}|0x|[0]\d)/i.test( _n ) ) && ( _r = false );
	        }
	        return _r;
	    }
	    /**
	     *  判断数值是否为金额
	     * @method  isMoney
	     * @param   {number}    _n
	     * @param   {int}    _dot  浮点数长度
	     * @return  Boolean
	     * @memberof V#utils
	     */
	    function isMoney( _n, _dot ){
	        _n = ( _n || '' ).toString();
	        typeof _dot == 'undefined' && ( _dot = 0 );
	        var _r = isDecimal( _n );
	        _r && _dot && /\./.test( _n ) && ( _n.split( '.' )[1].length > _dot ) && ( _r = false );
	        return _r;
	    }
	    /**
	     * 扩展 jquery 选择器
	     * <br />扩展起始字符的 '/' 符号为 jquery 父节点选择器
	     * <br />扩展起始字符的 '|' 符号为 jquery 子节点选择器
	     * <br />扩展起始字符的 '(' 符号为 jquery 父节点查找识别符
	     * @method  parentSelector
	     * @param   {selector}  _item
	     * @param   {String}    _selector
	     * @param   {selector}  _finder
	     * @return  selector
	     * @memberof V#utils
	     */
	    function parentSelector( _item, _selector, _finder ){
	        _item && ( _item = $( _item ) );
	        if( /\,/.test( _selector ) ){
	            var _multiSelector = [], _tmp;
	            _selector = _selector.split(',');
	            $.each( _selector, function( _ix, _subSelector ){
	                _subSelector = _subSelector.trim();
	                _tmp = parentSelector( _item, _subSelector, _finder );
	                _tmp && _tmp.length 
	                    &&  ( 
	                            ( _tmp.each( function(){ _multiSelector.push( $(this) ) } ) )
	                        );
	            });
	            return $( _multiSelector );
	        }
	        var _pntChildRe = /^([\/]+)/, _childRe = /^([\|]+)/, _pntRe = /^([<\(]+)/;
	        if( _pntChildRe.test( _selector ) ){
	            _selector = _selector.replace( _pntChildRe, function( $0, $1 ){
	                for( var i = 0, j = $1.length; i < j; i++ ){
	                    _item = _item.parent();
	                }
	                _finder = _item;
	                return '';
	            });
	            _selector = _selector.trim();
	            return _selector ? _finder.find( _selector ) : _finder;
	        }else if( _childRe.test( _selector ) ){
	            _selector = _selector.replace( _childRe, function( $0, $1 ){
	                for( var i = 1, j = $1.length; i < j; i++ ){
	                    _item = _item.parent();
	                }
	                _finder = _item;
	                return '';
	            });
	            _selector = _selector.trim();
	            return _selector ? _finder.find( _selector ) : _finder;
	        }else if( _pntRe.test( _selector ) ){
	            _selector = _selector.replace( _pntRe, '' ).trim();
	            if( _selector ){
	                if( /[\s]/.test( _selector ) ){
	                    var _r;
	                    _selector.replace( /^([^\s]+)([\s\S]+)/, function( $0, $1, $2 ){
	                        _r = _item.closest( $1 ).find( $2.trim() );
	                    });
	                    return _r || _selector;
	                }else{
	                    return _item.closest( _selector );
	                }
	            }else{
	                return _item.parent();
	            }
	        }else{
	            return _finder ? _finder.find( _selector ) : (window.jQuery || window.Zepto)( _selector );
	        }
	    }
	    /**
	     * 把输入值转换为布尔值
	     * @method parseBool
	     * @param   {*} _in
	     * @return bool
	     * @memberof V#utils
	     */
	    function parseBool( _in ){
	        if( typeof _in == 'string' ){
	            _in = _in.replace( /[\s]/g, '' ).toLowerCase();
	            if( _in && ( _in == 'false' 
	                            || _in == '0' 
	                            || _in == 'null'
	                            || _in == 'undefined'
	           )) _in = false;
	           else if( _in ) _in = true;
	        }
	        return !!_in;
	    }

	    return V;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {

	var V = __webpack_require__( 1 )
	    , Const = __webpack_require__( 5 )
	    , r = $.extend( true, Const, {
	            index: {
	                defaultImg: 'http://p5.qhimg.com/d/inn/d6edc5a1/default_item.jpg'
	                , defaultDesc: '该应用没有添加描述'
	            }
	            , initPage: 'onInitPage'
	        } )
	    ;
	module.exports = r;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	var V = __webpack_require__( 1 )
	    , BaseHandler = __webpack_require__( 7 )
	    ;

	V.Const = $.extend( true, V.Const || {}, {
	    is: {
	        android: 'Android'
	        , ios: 'iOS'
	        , unknown: 'unknown' 
	    }
	    , check: {
	        isExp: 'check_isExp'
	        , modDisabled: 'check_modDisabled'
	    }
	    , react: {
	        ready: 'reactReady'
	    }
	    , type: {
	        json: 'jsonType'
	        , string: 'stringType'
	        , empty: 'emptyType'
	    }
	    , parseData: {
	        url: 'parseDataUrl'
	        , base64: 'parseDataBase64'
	        , base64Url: 'parseDataBase64Url'
	        , hexToBin: 'parseDataHTB'
	        , json: 'parseDataJson'
	        , ex: 'parseDataEx'
	        , isError: 'parseData_isError'
	    }
	    , history: {
	        pushState: 'historyPushState'
	    }
	    , send: {
	    }
	    , command: {
	    }
	    , app: {
	        ready: 'jsAppReady'
	        , init: 'jsAppInit'
	        , reset: 'jsAppReset'
	        , command: 'jsAppCommand'

	        , back: 'jsAppBack'

	        , detectCommand: 'jsAppDetectCommand'
	        , afterUpdate: 'app_afterUpdate'
	        , onPopState: 'app_onPopState'
	    }
	    , exec: {
	        appCommand: 'jsExecAppCommand'
	    }
	    , open: {
	        panel: 'open_panel'
	        , dialog: 'open_dialog'
	        , before: 'open_before'
	        , after: 'open_after'
	    }
	    , close: {
	        panel: 'close_panel'
	        , dialog: 'close_dialog'
	        , before: 'close_before'
	        , after: 'close_after'
	    }
	    , mod: {
	        show: 'showMod'
	        , hashMod: 'showHashMod'
	        , afterShowMod: 'showAfterShowMod'
	        , afterShowSubmod: 'showAfterShowSubmod'

	        , url: 'showUrl'
	        , keyBack: 'showKeyBack'
	        , ex: 'showModEx'
	    }
	}, BaseHandler );

	module.exports = V.Const;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var V = __webpack_require__( 1 )
	    , Log = __webpack_require__( 9 )
	    , _ = __webpack_require__( 11 )
	    ;

	/**
	 * 提供事件处理的基本方法
	 * @module v.basehandler
	 * @abstract
	 * @return {object}
	 */
	var _CONST = {
	    /**
	     * 触发事件
	     * @method  trigger
	     * @param   {string}    _evtName    事件名
	     * @param   {array}     _args       需要传递的参数
	     * @return  v.module:basehandler
	     */
	    trigger: 
	        function( _evtName, _args ){
	            var _trigger = $( this );
	            _trigger.trigger( _evtName, _args );
	            return this;
	        }
	    /**
	     * 触发事件, 并返回处理结果
	     * @method  triggerHandler
	     * @param   {string}    _evtName    事件名
	     * @param   {array}     _args       需要传递的参数
	     * @return  *
	     */
	    , triggerHandler: 
	        function( _evtName, _args ){
	            var _trigger = $( this );
	            return _trigger.triggerHandler( _evtName, _args );
	        }
	    /**
	     * 绑定事件
	     * @method  on
	     * @param   {string}    _evtName    事件名
	     * @param   {callback}  _cb         回调函数
	     * @return  v.module:basehandler
	     */
	    , on: 
	        function( _evtName, _cb ){
	            var _trigger = $( this );
	            _trigger.on( _evtName, _cb );
	            return this;
	        }
	    /**
	     * 解绑事件
	     * @method  off
	     * @param   {string}    _evtName    事件名
	     * @param   {callback}  _cb         回调函数
	     * @return  v.module:basehandler
	     */
	    , off: 
	        function( _evtName, _cb ){
	            var _trigger = $( this );
	            _trigger.off( _evtName, _cb );
	            return this;
	        }
	};
	module.exports = V.BaseHandler = _CONST;




	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__( 11 );

	!window.console && (
		window.console = {
			log: function(){}
			, dir: function(){}
			, error: function(){}
			, clear: function(){}
		}
	);

	module.exports =  {
		/**
		 * 全局控制是否输出调试信息
		 * @name debug
		 * @type boolean
		 * @default true
		 * @memebrof v.module:log
		 * @example    Log.debug = false;//禁止控制台输出调试信息
		 */
		debug: true
		/**
		 * 输出调试信息
		 * @method  v.module:log#log
		 * @param  {...string} _msg 调试信息
		 * @return v.module:log
		 * @example Log.log( 'msg1', 'msg2', 'msg3' );
		 */
		, log: function(){
			this.debug && console.log( _.toArray( arguments ).join( ' ' ) ); 
			return this;
		}
		/**
		 * 输出调试信息, 用于显示object结构
		 * @method  v.module:log#dir
		 * @param  {...*} _msg 调试信息
		 * @return v.module:log
		 * @example Log.dir( 'string1', [1,2,3], {k1: 1, k2: 2} );
		 */
		, dir: function(){
			var _p = this;
			_p.debug && _.each( _.toArray( arguments ), function( _a ){ 
				if( typeof _a == 'string' || typeof _a == 'number' || typeof _a == 'boolean' || typeof _a == 'undefined' ){
					_p.log( _a );
					return;
				}
				console.dir( _a ); 
			} ); 
			return this;
		}
		/**
		 * 输出错误调试信息
		 * @method  v.module:log#error
		 * @param  {...*} _msg 调试信息
		 * @return v.module:log
		 * @example Log.error( 'error occur' );
		 */
		, error: function(){
			this.debug && _.each( arguments, function( _a ){ console.error( _a ); } ); 
			return this;
		}
		/**
		 * 清除调停信息
		 * @method  v.module:log#clear
		 * @return v.module:log
		 * @example Log.clear();
		 */
		, clear: function(){
			this.debug && console.clear(); 
			return this;
		}
	};



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.7.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.7.0';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var createCallback = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  _.iteratee = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return createCallback(value, context, argCount);
	    if (_.isObject(value)) return _.matches(value);
	    return _.property(value);
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    if (obj == null) return obj;
	    iteratee = createCallback(iteratee, context);
	    var i, length = obj.length;
	    if (length === +length) {
	      for (i = 0; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    if (obj == null) return [];
	    iteratee = _.iteratee(iteratee, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length),
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index = 0, currentKey;
	    if (arguments.length < 3) {
	      if (!length) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[index++] : index++];
	    }
	    for (; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== + obj.length && _.keys(obj),
	        index = (keys || obj).length,
	        currentKey;
	    if (arguments.length < 3) {
	      if (!index) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[--index] : --index];
	    }
	    while (index--) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    predicate = _.iteratee(predicate, context);
	    _.some(obj, function(value, index, list) {
	      if (predicate(value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    predicate = _.iteratee(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    if (obj == null) return true;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    if (obj == null) return false;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (obj.length !== +obj.length) obj = _.values(obj);
	    return _.indexOf(obj, target) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matches(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matches(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (obj.length !== +obj.length) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = low + high >>> 1;
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = _.iteratee(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    if (n < 0) return [];
	    return slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return slice.call(array, Math.max(array.length - n, 0));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    for (var i = 0, length = input.length; i < length; i++) {
	      var value = input[i];
	      if (!_.isArray(value) && !_.isArguments(value)) {
	        if (!strict) output.push(value);
	      } else if (shallow) {
	        push.apply(output, value);
	      } else {
	        flatten(value, shallow, strict, output);
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i];
	      if (isSorted) {
	        if (!i || seen !== value) result.push(value);
	        seen = value;
	      } else if (iteratee) {
	        var computed = iteratee(value, i, array);
	        if (_.indexOf(seen, computed) < 0) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (_.indexOf(result, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true, []));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(slice.call(arguments, 1), true, true, []);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function(array) {
	    if (array == null) return [];
	    var length = _.max(arguments, 'length').length;
	    var results = Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var idx = array.length;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var Ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    args = slice.call(arguments, 2);
	    bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      Ctor.prototype = func.prototype;
	      var self = new Ctor;
	      Ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (_.isObject(result)) return result;
	      return self;
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    return function() {
	      var position = 0;
	      var args = boundArgs.slice();
	      for (var i = 0, length = args.length; i < length; i++) {
	        if (args[i] === _) args[i] = arguments[position++];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return func.apply(this, args);
	    };
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = hasher ? hasher.apply(this, arguments) : key;
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last > 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed before being called N times.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      } else {
	        func = null;
	      }
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (hasOwnProperty.call(source, prop)) {
	            obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj, iteratee, context) {
	    var result = {}, key;
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      iteratee = createCallback(iteratee, context);
	      for (key in obj) {
	        var value = obj[key];
	        if (iteratee(value, key, obj)) result[key] = value;
	      }
	    } else {
	      var keys = concat.apply([], slice.call(arguments, 1));
	      obj = new Object(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        key = keys[i];
	        if (key in obj) result[key] = obj[key];
	      }
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (
	      aCtor !== bCtor &&
	      // Handle Object.create(x) cases
	      'constructor' in a && 'constructor' in b &&
	      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	        _.isFunction(bCtor) && bCtor instanceof bCtor)
	    ) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size, result;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size === b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      size = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      result = _.keys(b).length === size;
	      if (result) {
	        while (size--) {
	          // Deep compare each member
	          key = keys[size];
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	  _.matches = function(attrs) {
	    var pairs = _.pairs(attrs), length = pairs.length;
	    return function(obj) {
	      if (obj == null) return !length;
	      obj = new Object(obj);
	      for (var i = 0; i < length; i++) {
	        var pair = pairs[i], key = pair[0];
	        if (pair[1] !== obj[key] || !(key in obj)) return false;
	      }
	      return true;
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = createCallback(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? object[property]() : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 13 */
/***/ function(module, exports) {

	var r = {
	    "data": [
	        {
	            "name": "项目方案"
	            , "items": [
	                /*
	                {
	                    "name": "默认"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                */
	                /*
	                , {
	                    "name": "动态模板"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                , {
	                    "name": "动态模板 + React"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                , {
	                    "name": "动态模板 + less"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                , {
	                    "name": "动态模板 + React + less"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                */
	            ]
	        }
	        , {
	            "name": "webpack 应用组件"
	            , "items": [
	                {
	                    "name": "mv.js"
	                    , "url": "https://github.com/openjavascript/mv.js"
	                    , "desc": "提供V命名空间和常用的工具函数"
	                    , "doc_url": ""
	                }
	            ]
	        }
	        , {
	            "name": "webpack 系统组件"
	            , "items": [
	                /*
	                {
	                    "name": "item name"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                */
	            ]
	        } 
	        , {
	            "name": "webpack 小工具"
	            , "items": [
	                /*
	                {
	                    "name": "item name"
	                    , "img": "./static/img/default_item.jpg"
	                    , "url": "#"
	                    , "desc": ""
	                }
	                */
	            ]
	        }

	    ]
	};
	module.exports = r;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {/** @jsx React.DOM */var V = __webpack_require__( 1 )
	    , Const = __webpack_require__( 4 )
	    , Item = __webpack_require__( 17 )
	    , Tpl = null
	    ;

	module.exports = Tpl = React.createClass({displayName: "Tpl",
	    componentDidMount: function(){
	    }

	    , render: function(){
	        var data = this.props.data || [];


	        return (
	            React.createElement("div", {className: "inner clearfix"}, 
	                data.map( function( item ) {
	                    return React.createElement(Item, {data: item});
	                })
	            )
	        );
	    }
	});

	Const.on( Const.initPage, function( _evt, _data ){
	    ReactDOM.render( React.createElement(Tpl, React.__spread({},  _data)), document.getElementById( 'content-wrapper' ) );
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(16)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/** @jsx React.DOM */var V = __webpack_require__( 1 )
	    , Const = __webpack_require__( 4 )
	    ;

	var Items  = React.createClass({displayName: "Items",
	    render: function(){
	        var data = this.props.data || [];


	        if( !data.length ){
	            return ( 
	                React.createElement("div", {className: "noitems"}, 
	                    React.createElement("h2", null, "该分类的内容正在建设中...")
	                )
	            );
	        }

	        return (
	            React.createElement("dl", {className: "clearfix cat_item"}, 
	                data.map( function( item ) {
	                    var url = item.doc_url || item.url
	                        , img = item.img || Const.index.defaultImg 
	                        , desc = item.desc || Const.index.defaultDesc
	                        ;
	                    
	                    return ( 
	                        React.createElement("dd", null, 
	                            React.createElement("a", {href: url, target: "_blank", className: "cover"}, 
	                                React.createElement("img", {src: img}), 
	                                React.createElement("span", null), 
	                                React.createElement("label", null, desc)
	                            ), 
	                            React.createElement("a", {href: item.url, target: "_blank", className: "link"}, item.name)
	                        )
	                    );
	                })
	            )
	        );
	    }
	});

	module.exports  = React.createClass({displayName: "module.exports",
	    componentDidMount: function(){
	    }

	    , render: function(){
	        var data = this.props.data || {};

	        //return ( <div>test</div> );


	        return (
	            React.createElement("dl", {className: "clearfix cat"}, 
	                React.createElement("dt", null, React.createElement("label", null, data.name)), 
	                React.createElement("dd", null, 
	                    React.createElement(Items, {data: data.items})
	                )
	            )
	        );
	    }
	});





	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }
]);
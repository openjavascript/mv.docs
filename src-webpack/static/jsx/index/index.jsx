var V = require( 'mv.js' )
    , Const = require( '../../js/const.js' )
    , Item = require( './item.jsx' )
    , Tpl = null
    ;

module.exports = Tpl = React.createClass({
    componentDidMount: function(){
    }

    , render: function(){
        var data = this.props.data || [];


        return (
            <div className="inner clearfix">
                {data.map( function( item ) {
                    return <Item data={item} />;
                })}
            </div>
        );
    }
});

Const.on( Const.initPage, function( _evt, _data ){
    ReactDOM.render( <Tpl {..._data} />, document.getElementById( 'content-wrapper' ) );
});

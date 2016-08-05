var V = require( 'mv.js' )
    , Const = require( '../../js/const.js' )
    //, Item = require( './item.jsx' )
    , Tpl = null
    , data = require( '../../json/category.json' )
    ;


/*
                {data.map( function( item ) {
                    return <Item data={item} />;
                })}
*/

module.exports = Tpl = React.createClass({
    componentDidMount: function(){
    }

    , render: function(){
        var data = this.props.data || {};

        return (
            <div class="inner clearfix">
            </div>
        );
    }
});

ReactDOM.render( <Tpl data={ { data: []} } />, document.getElementById( '#content-wrapper' ) );

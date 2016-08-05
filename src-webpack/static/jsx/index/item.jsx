var V = require( 'mv.js' )
    , Const = require( '../../js/const.js' )
    ;

module.exports  = React.createClass({
    componentDidMount: function(){
    }

    , render: function(){
        var data = this.props.data || {};

        return ( <div>test</div> );

        return (
            <dl className="clearfix cat">
                <dt><label>{data.name}</label></dt>
                <dd>
                    <dl className="clearfix cat_item">
                        {data.items.map( function( item ) {
                            
                            return ( 
                                <dd>
                                    <a href={item.url}><img src={item.img || Const.indexDefaultImg }  /></a>
                                    <a href={item.url}>{item.name}</a>
                                </dd>
                            );
                        })}
                    </dl>
                </dd>
            </dl>
        );
    }
});





var V = require( 'mv.js' )
    , Const = require( '../../js/const.js' )
    ;

module.exports  = React.createClass({
    componentDidMount: function(){
    }

    , render: function(){
        var data = this.props.data || {};

        //return ( <div>test</div> );

        return (
            <dl className="clearfix cat">
                <dt><label>{data.name}</label></dt>
                <dd>
                    <dl className="clearfix cat_item">
                        {data.items.map( function( item ) {
                            var url = item.doc_url || item.url
                                , img = item.img || Const.index.defaultImg 
                                , desc = item.desc || Const.index.defaultDesc
                                ;
                            
                            return ( 
                                <dd>
                                    <a href={url} target="_blank" className="cover">
                                        <img src={img}  />
                                        <span></span>
                                        <label>{desc}</label>
                                    </a>
                                    <a href={item.url} target="_blank" className="link">{item.name}</a>
                                </dd>
                            );
                        })}
                    </dl>
                </dd>
            </dl>
        );
    }
});





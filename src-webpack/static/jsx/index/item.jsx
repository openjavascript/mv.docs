var V = require( 'mv.js' )
    , Const = require( '../../js/const.js' )
    ;

var Items  = React.createClass({
    render: function(){
        var data = this.props.data || [];


        if( !data.length ){
            return ( 
                <div className="noitems">
                    <h2>该分类的内容正在建设中...</h2>
                </div>
            );
        }

        return (
            <dl className="clearfix cat_item">
                {data.map( function( item ) {
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
        );
    }
});

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
                    <Items data={data.items} />
                </dd>
            </dl>
        );
    }
});





import React,{Component} from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import products from '../Data/index';
import map from 'lodash/map';



class AllItem extends Component{

    constructor(props){
        super(props);
    }


    render(){


       const item = this.props.item_send.map((product)=>{

            return (
                <div key={product.id} className="item">
                    <div className="product-img">
                        <img alt={product.name} src={product.img} />
                    </div>
                    <div className="product-details">
                        <h1 id="product-name">{product.name}</h1>
                        <h4 id="product-description">{product.description}</h4>
                    </div>
                    <div className="price-add">
                        <h5 id="product-price">${product.price}</h5>
                        <Icon small id="add-icon">add_shopping_cart</Icon>
                    </div>
                </div>
            );
        });


       return(

           <div className="items"> {item} </div>

       );


    }
}
export default AllItem;
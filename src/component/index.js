import React,{Component} from 'react';
import AllItem from './product/allitem';
import Slider from './slider';
import './product/index.css';
import {get_all_items_action} from '../action/product_action/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Index extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount = () => {
            this.props.get_items();
    }

    render(){
        return(

            <div>

                { /* putted here slider  */}
                <h1> All Product </h1>
                <div className="items-wrapper">
                    <div className="items-title">
                        <h4>All Items</h4>
                    </div>
                    <div className="items-wrapper">
                        { /* gives all the product As a param(object of Array) */}
                        <AllItem item_send = {this.props.items} />

                    </div>
                </div>
            </div>

        );

    }


}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        get_items:get_all_items_action
    },dispatch);
}

function mapStateToProps(state) {
    console.log(state.all_items.items);
    return {
        items:state.all_items.items
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);

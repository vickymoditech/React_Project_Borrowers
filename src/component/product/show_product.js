import React,{Component} from 'react';
import Header from '../header';

class Showproduct extends Component {

    render(){

        return(

            <div>
                <Header/>
                <h1> Product Id {parseInt(this.props.match.params.id)} </h1>
            </div>

        );
    }

}
export default Showproduct;
import React,{Component} from 'react';

const classNames = [
    "first-header",
    "second-header",
    "third-header"
];

class Slider extends Component{

    constructor(props){
        super(props);
        this.state = {index:0,data:0}
    }

    componentDidMount = () => {
        setInterval(this.change_slider, 3000);
    }

    change_slider(){

        console.log(this.state);
        //const newIndex = this.state.index + 1;
        //this.setState({ index: this.state})

    }



    render(){
        const index = this.state.index % classNames.length;
        const className = classNames[index];
        return(

            <div> {index} </div>

        )

    }
}

export default Slider;
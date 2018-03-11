import React, { Component } from 'react';
import './slider.css';

const slider_image = [
    "https://preview.ibb.co/j8nRCQ/fashion2.jpg",
    "https://preview.ibb.co/fm4Cmk/fashion3.jpg",
    "https://preview.ibb.co/bMsCK5/fashion5.jpg",
    "https://preview.ibb.co/fm4Cmk/fashion6.jpg"
];

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    incrementIndex = () => {
        const newIndex = this.state.index + 1;
        this.setState({ index: newIndex })
    }

    componentDidMount = () => {
        setInterval(this.incrementIndex, 3000);
    }

    render() {
        const index = this.state.index % slider_image.length;
        const className = slider_image[index];
        var divStyle = {
            backgroundImage: 'url(' + slider_image[index] + ')',
        };
        return(
            <div>
                <div className="slider" style={divStyle}>
                    <div>{index}</div>
                </div>
            </div>
        )
    }
}

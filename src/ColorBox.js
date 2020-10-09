import React, { Component } from "react";
import "./ColorBox.css"

class ColorBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className='ColorBox'>
                <span>{this.props.name}</span>
                <span>MORE</span>
                <p>Color box</p>
            </div>
        )
    }
}

export default ColorBox;
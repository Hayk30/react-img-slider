import React, { Component } from 'react';

class Buttons extends Component {
    render() { 
        return ( 
            <>
                <button onClick={this.props.hendleLeft}>Left</button>
                <button onClick={this.props.hendleRight}>Right</button>
            </> 
        );
    }
}
 
export default Buttons;
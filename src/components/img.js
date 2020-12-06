import React, { Component } from 'react'
import ImgStyle from './img.module.css'

class Img extends Component {

     
    render() { 
        const {picksItem} = this.props;   
        return ( 
            <div className={ImgStyle.imgBody}
                style={{
                        transform: `translateX(${this.props.indexValue}px)`,
                        transition: 'transform ease-out 0.45s'
                }}>               
                {picksItem.map((myDesc,index)=>{
                    return(
                        <img key={index} src={myDesc} alt='photos'/>                       
                    )
                })} 
            </div>
         );
    }
}
 
export default Img;
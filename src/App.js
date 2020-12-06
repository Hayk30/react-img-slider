import './App.css';
import React, { Component } from 'react';
import Buttons from './components/button';
import Img from './components/img';


class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      picksItem: [
          "./img/yerevan.jpg",
          "./img/Toronto.jpg",
          "./img/tula.jpg",
          "./img/sanktpeterburg.jpg",
          "./img/LosAngeles.jpg",
      ],
      currentIndex:0,
      indexValue:0,
    }
  }
  

  hendleLeft=()=>{
    if(this.state.currentIndex === 0)
    return(
      this.setState(prevState=>({
        currentIndex: prevState.currentIndex - 1,
        indexValue: prevState.indexValue + this.slideWidth()
      }))
    )
  }

  hendleRight=()=>{
    if(this.state.currentIndex === this.state.picksItem.length - 1) {
      return this.setState({
        currentIndex: 0,
        indexValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      indexValue: prevState.indexValue + -(this.slideWidth())
    }));
  }

  slideWidth=()=>{
    return document.querySelector('.imgBody')
  }
  render() {
    
    return (
        <div className="App">
          <>
            <Img picksItem={this.state.picksItem}/>
            <Buttons hendleLeft={this.hendleLeft} hendleRight={this.hendleRight} />
          </>
        </div>
    )
  }
}

export default App;

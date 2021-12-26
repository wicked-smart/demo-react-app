import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.state.count}</h1>
        <button style={{marginRight: '10px'}} onClick={this.increment}>increase</button>
        <button onClick={this.decrement}>decrease</button>
      </div>   
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count+1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count-1
    });
  }

  
}   

class App extends Component{
  render(){
    return(
      <div>
        <Counter/>
        <Counter/>
      </div>
    );
  }
    
}


export default App;

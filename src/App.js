import React, { Component } from 'react';
import './App.css';

class Hello extends Component{

  render() {
    return (
      <div style={{ textAlign: "center" }}>
          <h1>Hellooooooooo {this.props.name || "Andrea" }!</h1>
      </div>
    );
  }
  
}   

class App extends Component{
  render(){
    return(
      <div>
        <Hello name="prem"/>
        <Hello name="Rahul"/>
        <Hello />
      </div>
    );
  }
} 

export default App;

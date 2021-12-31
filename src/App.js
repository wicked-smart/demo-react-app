import React, { Component } from 'react';
import './App.css';


class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 1,
      num2: 2,
      score: 0,
      input: "",
      incorrect: false
        
    }
  }

  render(){
    if(this.state.score >= 5)
      return this.renderWin();
    else
      return this.renderProblem();
  }


  renderWin(){
    return(
      <div style={{ textAlign: 'center'}}>
        <h1>Congratulations, You won !!!!</h1> 
        <button onClick={this.renderProblemPage}>back to the game!</button>
      </div>
    )
  }

  renderProblemPage = () => {
    this.handleReset();
    this.renderProblem();
  }

  renderProblem(){
    return(
      <div style={{ textAlign: 'center'}}>
        <h1 style={{color: this.state.incorrect ? "red" : ""}}>{this.state.num1} + {this.state.num2}</h1>
        <input type="text" onKeyPress={this.updateInput} onChange={this.updateResponse} value = {this.state.input} placeholder="Enter value here..."></input>
        <br></br>
        <div>Score: <strong>{this.state.score}</strong></div>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }

  

  updateResponse = (e) =>{
    this.setState({
      input: e.target.value
    })
  }

  updateInput = (e) =>{
    if(e.key === "Enter"){
      const val = parseInt(this.state.input);
      if(val === (this.state.num1 + this.state.num2))
      {
        // answer is right
        this.setState({
          num1: Math.ceil(Math.random()*10),
          num2: Math.ceil(Math.random()*10),
          score: this.state.score + 1,
          input: "",
          incorrect: false
        })
      }
      else{
        // answer is wrong
        this.setState({
          input: "",
          incorrect: true
        })
      }
    }
  }

  handleReset = () => {
    this.setState({
      score: 0,
      input: "",
      incorrect: false
    })
  }


}

class App extends Component{
  render(){
    return(
      
      <Counter />
    
    )
    
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import RoboFriends from './robofriends';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs},()=>{
    console.log(this.state.robots);
    }));
  }

  render() {
    return (
      <RoboFriends robots={this.state.robots} />
    );
  }
}

export default App;

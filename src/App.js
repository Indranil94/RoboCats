import React, { Component } from 'react';
import './App.css';
import RoboFriends from './robofriends';
import SearchBar from './searchbar';
import Scroll from './scroll';
class App extends Component {

  constructor(){
    super();
    this.state = {
      searched: '',
      robots: []
    }
  }

  onSearchChange=(event)=>{
    this.setState({searched: event.target.value});
  }

  onButtonClick=(event)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs.filter(ind=>{
              return (ind.name.toUpperCase().includes(this.state.searched.toUpperCase())
                || ind.email.toUpperCase().includes(this.state.searched.toUpperCase()) )})
    }))
    .catch(err=>console.log(err));
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs}))
    .catch(err=>console.log(err))
  }

  render() {
    
    if(this.state.robots.length === 0){
      return (
        <h1 className="header">Robots yet to be found</h1>
      );
    }

    return (
      <div>
        <p className = "header">Robo Cats</p>
        <SearchBar onSearchChange={this.onSearchChange} onButtonClick= {this.onButtonClick}/>
        <Scroll>
          <RoboFriends robots={this.state.robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

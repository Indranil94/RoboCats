import React, { Component } from 'react';
import './App.css';
import RoboFriends from './robofriends';
import SearchBar from './searchbar';
import Scroll from './scroll';
import ErrorBoundary from './errorboundary';
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

  onSearchClick=(event)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs.filter(ind=>{
              return (ind.name.toUpperCase().includes(this.state.searched.toUpperCase())
                || ind.email.toUpperCase().includes(this.state.searched.toUpperCase()) )})
    }))
    .catch(err=>console.log(err));
  }

  onResetClick=(event)=>{
    this.setState({searched: ""});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs}))
    .catch(err=>console.log(err));
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs}))
    .catch(err=>console.log(err));
  }

  render() {
    
/*    if(this.state.robots.length === 0){
      return (
        <h1 className="header">Robots yet to be found</h1>
      );
    }*/

    return (
      <div>
        <p className = "header">Robo Cats</p>
        <SearchBar onSearchChange={this.onSearchChange} textval = {this.state.searched} onSearchClick= {this.onSearchClick} onResetClick={this.onResetClick}/>
        <ErrorBoundary>
          <Scroll>
            <RoboFriends robots={this.state.robots} />
          </Scroll>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

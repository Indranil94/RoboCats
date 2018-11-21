import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import RoboFriends from './robofriends';
import {Header} from './header';
import SearchBar from './searchbar';
import Scroll from './scroll';
import ErrorBoundary from './errorboundary';
import {setSearchField,requestRobots} from './actions';

const mapStateToProps=(state)=>{
  return {
            searchField: state.SearchRobots.searchField,
            robots: state.RequestRobots.robots,
            isPending: state.RequestRobots.isPending,
            error: state.RequestRobots.error
          }
}

const mapDispatcherToProps=(dispatch)=>{
  return {
    onSearchChange: (event)=>{
      dispatch(setSearchField(event.target.value));},
    onSearchClick: ()=> requestRobots(dispatch)
  };
}

class App extends Component {


  componentDidMount(){
    this.props.onSearchClick();
  }

  render() {
    const {robots, isPending} = this.props;
    let searchedRobots =[];
    let disp;
    if(!isPending){
        searchedRobots = robots.filter(ind=>{
                  return (ind.name.toUpperCase().includes(this.props.searchField.toUpperCase())
                    || ind.email.toUpperCase().includes(this.props.searchField.toUpperCase()) )
                });
        disp = (<div>
                  <SearchBar onSearchChange={this.props.onSearchChange} textval = {this.props.searchField} onSearchClick= {this.props.onSearchClick}/>
                  <ErrorBoundary>
                    <Scroll>
                      <RoboFriends robots={searchedRobots} />
                    </Scroll>
                  </ErrorBoundary>
                </div>)
      }
    else{
      disp = <h1>Loading</h1>;
    }

    return (
      <div>
        <Header />
        { disp }           
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);

 /* constructor(props){
    super(props);
    this.state = {
      searched: '',
      robots: []
    }
  }*/

  /*onSearchChange=(event)=>{
    this.setState({searched: event.target.value});
  }*/

/*  onSearchClick=(event)=>{

    this.props.onSearch
    .then(robs=> this.setState({robots: robs.filter(ind=>{
              return (ind.name.toUpperCase().includes(this.props.searchField.toUpperCase())
                || ind.email.toUpperCase().includes(this.props.searchField.toUpperCase()) )})
    }))
    .catch(err=>console.log(err));
  }*/

  /*onResetClick=(event)=>{
    this.props.onSearchChange();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(robs=> this.setState({robots: robs}))
    .catch(err=>console.log(err));
    this.componentDidMount;
  }*/
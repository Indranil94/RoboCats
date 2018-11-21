import React,{Component} from 'react';
import './App.css';

export class Header extends Component{
	shouldComponentUpdate(){
		return false;
	}
	render(){
		return (
			<div>
				<h1 className = "header">Robo Cats</h1>
			</div>)
	}
}
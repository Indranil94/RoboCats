import React,{Component} from 'react';

export class Counter extends Component{
	constructor(props){
		super(props);
		this.state = {count: 0};
	}

	shouldComponentUpdate(nextState, nextProps){
		if(nextState.count === this.state.count){
			return false;
		}
		return true;
	}

	increaseCount = () =>{
		this.setState(state=>{
			return {count: state.count + 1}
		})
	}

	render(){
		console.log('count');
		return(
			<div className='tc'>
				<input type="button" className = "near-white bg-animate bg-near-black hover-bg-gray ma2 tc br2 pa2" onClick={this.increaseCount} value={this.state.count} />
			</div> )	
	}
}
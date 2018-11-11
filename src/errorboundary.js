import React,{Component} from 'react';

class ErrorBounday extends Component{
	constructor(props){
		super(props);
		this.state = {hasError: false}
	}

	componentDidCatch(err, info){
		this.setState({hasError: true})
	}

	render(){
		if(this.state.hasError){
			return (<h1>Oops facing some technical difficulties</h1>)
		}
		return (this.props.children)
	}

}

export default ErrorBounday;
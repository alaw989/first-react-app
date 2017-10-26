import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	frenchify() {
		this.setState({greeting: 'Bonjour'});
		};
	constructor(props) {
		super(props);
		this.state = { greeting: 'Hello' };
		this.frenchify = this.frenchify.bind(this);
	};
	render() {
		return (
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}! 
				<br/>
				<button onClick={this.frenchify}>Frenchify!</button>
			</div>
		);
	};
};

export default HelloWorld;
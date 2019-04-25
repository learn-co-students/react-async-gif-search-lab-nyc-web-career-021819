import React, { Component } from 'react';

class MealSearch extends Component {
	state = {
		userInput: ''
	};

	handleChange = (e) => {
		this.setState({
			userInput: e.target.value
		});
		// console.log(e.target.value);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.userSearch(this.state.userInput);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange} />
				<button>Search</button>
			</form>
		);
	}
}

export default MealSearch;

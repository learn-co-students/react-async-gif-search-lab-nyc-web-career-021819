import React, { Component } from 'react';
import MealSearch from './MealSearch';
import MealList from './MealList';

class MealListContainer extends Component {
	state = {
		meals: [],
		userInput: ''
	};

	userSearch = (input) => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
			.then((res) => res.json())
			.then((json) => this.setState({ meals: json.meals.slice(0, 3) }));
	};

	render() {
		// console.log(this.state.meals);
		return (
			<div>
				<MealSearch userSearch={this.userSearch} />
				<MealList meals={this.state.meals} />
			</div>
		);
	}
}

export default MealListContainer;

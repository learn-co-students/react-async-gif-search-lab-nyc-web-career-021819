import React, { Component } from 'react';

class MealList extends Component {
	render() {
		return (
			<div>
				{this.props.meals.map((meal) => (
					<fragment>
						<h3>{meal.strMeal}</h3>
						<img key={meal.idMeal} src={meal.strMealThumb} />
					</fragment>
				))}
			</div>
		);
	}
}

export default MealList;

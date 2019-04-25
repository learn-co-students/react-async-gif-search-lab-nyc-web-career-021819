import React from 'react'

export default class GifList extends React.Component {

    renderMeals = () => {
        return this.props.meals.map(meal => {
            return <li>{meal.strMeal}</li>
        })
    }

    render() {
        return (
            <ul>
                {this.renderMeals()}
            </ul>
        )
    }
}
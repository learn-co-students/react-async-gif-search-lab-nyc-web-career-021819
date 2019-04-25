import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state={
    meals: []
  }

  handleSubmit = (value) => {
    if (value !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then(res => res.json())
      .then(meals => this.setState({meals: meals.meals.slice(0, 3)}))
    }
  }

  render(){
    console.log(this.state.meals)

    let meals = this.state.meals.map(meal => <GifList key={meal.idMeal} meal={meal} />)
    return (
      <div>
        <GifSearch search={this.handleSubmit}/>
        {meals}
      </div>
    )
  }
}

export default GifListContainer

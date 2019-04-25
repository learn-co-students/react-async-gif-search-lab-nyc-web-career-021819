import React from 'react'

// the App component should render out the GifListContainer component

class GifList extends React.Component {
  render(){
    console.log(this.props.meal)
    return (
      <div>
        <h4>{this.props.meal.strMeal}</h4>
        <h5>{this.props.meal.strArea}</h5>
        <img src={this.props.meal.strMealThumb}/>
      </div>
    )
  }
}

export default GifList

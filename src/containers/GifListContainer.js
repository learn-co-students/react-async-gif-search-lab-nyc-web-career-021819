import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

  state = {
    gifs : []
  }

  render(){
    return (
      <div>
        <GifSearch searchedGifs= {this.fetchGIFs}/>
        <GifList gifs= {this.state.gifs}/>
      </div>

    )
  }

  fetchGIFs = (query = "beef") => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
      .then(data => {
        // data.meals.map(meal => {
          return this.setState({gifs: data.meals.map(meal => meal.strMealThumb)})
      })
  }


  componentDidMount(){
    this.fetchGIFs()
  }
}

export default GifListContainer;

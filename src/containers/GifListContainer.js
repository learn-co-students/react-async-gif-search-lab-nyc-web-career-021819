import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render(){
    return (
      <div>
      < GifSearch submitHandler={this.submitSearch} />
      < GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  submitSearch = (e, searchTerm) => {
    e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(res=>res.json())
    .then(data => {
      if(data.meals){
        const newGifs = data.meals.map(recipe => {
          return recipe.strMealThumb
        })
        this.setState( prevState => ({
          gifs: newGifs
        }))
      }
    })
  }


}

export default GifListContainer

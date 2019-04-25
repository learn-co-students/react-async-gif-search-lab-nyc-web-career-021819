import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {

  constructor (props){
    super(props)

    this.state = {
      gifs: [{}],
      searched: ""
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <GifSearch updateSearch = {this.updateSearch}/>
        <GifList gifs = {this.state.gifs}/>
      </div>
    )
  }


  componentDidMount(searchQuery = "chicken"){
    console.log(searchQuery)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
    .then(data => data.json())
    .then(json => {
      if (json.meals){
        let urlArray = json.meals.map(recipe=>{
          return recipe.strMealThumb
        })
        console.log(urlArray)
        this.setState({
          gifs: urlArray.slice(0,3)
        })
      }
      else {
        alert("This is not a valid search. Please try again!")
      }

    })

  }

  updateSearch = (selected) => {
    this.componentDidMount(selected)
  }

}



export default GifListContainer

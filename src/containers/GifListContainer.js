import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component{
  state={
    meals: []
  }

  getMeal=(input)=>{
    this.componentDidMount(input)
  }


  componentDidMount(input='beef'){
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          meals: data.meals.splice(0, 3)
        })
      })

    }




  render(){
    console.log("Conatainer", this.state.meals);
    return(
      <div>
      <GifSearch searchMeal={this.getMeal}/>
      <GifList meals={this.state.meals}/>
      </div>
    )
  }
}


// fetchGifs = (query) =>{
//   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
//   .then(response=> response.json())
//   .then(({data}) => {
//       this.setState({
//           topThreeGifs: data.map(gif=>({url: gif.images.original.url}))
//       })
//   })
// }

export default GifListContainer

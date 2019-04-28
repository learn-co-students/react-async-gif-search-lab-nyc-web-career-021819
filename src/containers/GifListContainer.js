import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }


  fetchGifs = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm})
    .then(response => response.json())
    .then(gifs => {
      this.setState({
        gifs: gifs.data
      })
    })
  }

  componentDidMount() {
    this.fetchGifs("scary dolls")
  }

  render() {
    return (
      <div>
      <GifSearch search={this.fetchGifs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }


}

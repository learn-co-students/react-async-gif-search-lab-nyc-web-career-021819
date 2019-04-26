import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
    data: undefined
  }

  onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.gifs.value
    this.getGifs(query)
  }


  getGifs = async (query) => {
    await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=Zr94KvHVO3SzNbk4rX1BUBaTMRxbEGov&rating=g`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.data.slice(0, 3)
        })
      })
  }

  render() {
    const { data } = this.state
    return (
      <div>

        <GifSearch onSubmit={this.onSubmit} />
        <GifList data={data} />
      </div>
    )
  }
}

export default GifListContainer
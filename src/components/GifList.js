import React, { Component } from 'react'

class GifList extends Component {

  renderGif = () => {
    return this.props.gifs.map((gif, indx) => {
      return <div key={indx}>
      <ul><li><img src={gif} alt="food img"/></li></ul>
      </div>
    })
  }

  render(){
    console.log(this.props.gifs);
    return (
      this.renderGif()
    )
  }

}

export default GifList

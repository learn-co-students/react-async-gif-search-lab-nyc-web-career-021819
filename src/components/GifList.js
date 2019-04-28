import React from 'react'

export default class GifList extends React.Component {

  renderGifs = () => {
    console.log(this.props.gifs)
    return this.props.gifs.map(gif => {
      return <li key={gif.id}><img src={gif.images.original.url}/></li>
    })
  }

  render() {
    console.log(this.props.gifs)
    return (
      <ul>{this.renderGifs()}</ul>
    )
  }




}

import React, {Component} from 'react'

class GifList extends Component {

renderGifs = () => {
 let gifArray = this.props.gifs.map((gif)=> {
   return <li key={gif}><img src={gif} alt = ''/></li>
 })
 return gifArray
}
  render(){
    return(
      <ul>
      {this.renderGifs()}
      </ul>
    )
  }
}


export default GifList

import React, {Component} from 'react'

class GifList extends Component{
  render(){
    return(
      <div><ul>
        {this.props.meals.map(m=>{
          return <div><li key={m.idMeal}>{m.strMeal}</li>
          <img src={m.strMealThumb}
          width={50} height={50} mode='fit' key={m.strMealThumb}/>
          </div>
        })}
      </ul></div>
    )
  }
}

export default GifList

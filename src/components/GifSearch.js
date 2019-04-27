import React, {Component} from 'react';

class GifSearch extends Component{
  state = {
    search: ''
  }

  handleChange=event=>{
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit=event=>{
    event.preventDefault();
    this.props.searchMeal(this.state.search)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input  onChange={this.handleChange}/>

      </form>
    )
  }
}


export default GifSearch

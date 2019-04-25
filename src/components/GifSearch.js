import React, {Component} from 'react'

class GifSearch extends Component {

  state = {
    search: ""
  }

handleSubmit=(event)=>{
  event.preventDefault()
  this.props.updateSearch(this.state.search)
  return
}
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input
      value={this.state.search}
      onChange={this.handleChange}/>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }
}


export default GifSearch

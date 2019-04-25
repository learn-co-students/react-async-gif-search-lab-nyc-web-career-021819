import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.submitHandler(e, this.state.searchTerm)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange}/>
      <button>Search</button>
      </form>
    )
  }

}

export default GifSearch

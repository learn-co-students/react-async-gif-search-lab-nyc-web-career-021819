import React from 'react'


class GifSearch extends React.Component {

  state = {
    query: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchedGifs(this.state.query)
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }


  render(){
    return (
      <form onSubmit ={this.handleSubmit}>
        <input type="text" value = {this.state.query} onChange = {this.handleChange}/>
        <button type="submit">Search</button>
      </form>



    )
  }


}

export default GifSearch;

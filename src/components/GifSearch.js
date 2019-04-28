import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    input: ""
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.input)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Search</h2>
      <input onChange={this.handleChange} value={this.state.input}/>
      </form>
    )
  }

}

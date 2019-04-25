import React from 'react'

// the App component should render out the GifListContainer component
class GifSearch extends React.Component {

  state={
    value: ""
  }

  changeHandler = (e) => {
    this.setState({value: e.target.value})
  }

  searchHandler = (e) => {
    e.preventDefault()
    console.log(this.state.value)
    this.props.search(this.state.value)
    this.setState({value: ""})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.searchHandler}>
          <input type="text" value={this.state.value} onChange={this.changeHandler}/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default GifSearch

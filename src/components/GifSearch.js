import React, { Component } from 'react'
// import GifList from '..components/GifList'

export default class GifSearch extends Component {

//    Has handle submit function from GLConatiner

    state = {
        input: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, console.log("state change", event.target.value))
    }

    render() {

        return (
        <form onSubmit={event => this.props.handleSubmit(event)}>
            <label>Search:</label>
            <input type="text" name="input" onChange={this.handleChange} value={this.state.input}></input>
            <input type="submit"></input>
        </form>
        )
    }
}
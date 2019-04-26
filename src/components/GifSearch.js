import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.meal(this.state.input)
    }

    render() {
        console.log("this state", this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Search</h3>
                <input name="meal" onChange={this.handleChange}/>
            </form>

        )
    }
}

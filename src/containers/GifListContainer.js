import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        returnedGifs: ""
    };

    

    handleSubmit = event => {
        console.log("submitted!")
        event.preventDefault();
        (async () => {
            const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.children[1].value}`)
            const jsonResp = await resp.json()
            this.setState({returnedGifs: jsonResp}, console.log("resp:", jsonResp, "State:", this.state))
        })();
    }

    render() {

        return (
        <div>
            <GifList returnedGifs={this.state.returnedGifs}/>
            <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
}
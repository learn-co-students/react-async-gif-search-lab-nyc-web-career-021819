import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        meals: []
    }

    changeSearch = (word) => {
        this.componentDidMount(word)
    }
    
    render() {
        return (
            <div>
                <GifList meals={this.state.meals}/>
                <GifSearch gum={this.changeSearch}/>
            </div>
        )
    }

    componentDidMount(word='beef') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                meals: data.meals.slice(0,3)
            })
        })
    }
}
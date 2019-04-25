import React, { Component } from 'react'
// import GifList from '..components/GifList'

export default class GifList extends Component {

//    //    Has props with state from GLContainer
    renderGifList = () => {
        return this.props.returnedGifs === "" ? <li>"No Meals Yet"</li> : this.props.returnedGifs.meals.map(meal => {
            return (<li><img src={meal["strMealThumb"]}/></li>)})
    }
    render() {

        return (<ul>
        {this.renderGifList()}
        </ul>
        )
    }
}
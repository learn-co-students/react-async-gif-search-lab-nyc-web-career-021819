import NavBar from './NavBar';
import MealListContainer from './MealListContainer';
// the App component should render out the GifListContainer component
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar color="black" title="Giphy Search" />
				<MealListContainer />
			</div>
		);
	}
}

export default App;

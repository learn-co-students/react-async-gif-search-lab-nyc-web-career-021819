import React from 'react'
import GifListContainer from '../containers/GifListContainer.js'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <div>
          < NavBar color='black' title="Giphy Search" />
      </div>
      <div>
        <GifListContainer />
      </div>
    </div>
  )
}

export default App

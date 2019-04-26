import React from 'react'

const GifSearch = (props) => {

  // props.onSubmit = (e) => {
  //   e.preventDefault()

  //   console.log('here')

  // }

  return (
    <form onSubmit={props.onSubmit}>
      <div className="float-right">
        <div className="form-group">
          <label htmlFor="Search GIFs">Search Gifs</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search for GIFs"
            name="gifs" />
          <button className="btn btn-success">Find Gifs</button>
        </div>
      </div>
    </form>
  )
}

export default GifSearch

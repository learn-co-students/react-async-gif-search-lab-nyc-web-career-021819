import React from 'react'

const GifList = (props) => {

  if (props.data) {
    console.log(props.data[0].images.original.url)
  }

  return (
    <div>
      {props.data && props.data.map(gif => <img src={gif.images.original.url} />)}
    </div>
  )

}

export default GifList

import React from 'react'

const MovieCard = ( { movie } ) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <img src={movie.Poster} />
    </div>
  )
}

export default MovieCard
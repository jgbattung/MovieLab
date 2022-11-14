import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const SearchMovies = () => {
  const [movies, setMovies] = useState([])
  
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    const searchedMovies = data.Search

    setMovies(searchedMovies)
  }
  
  useEffect(() => {
    searchMovies('batman')
  }, [])
  

  return (
    <div className='container'>
      <div className='search'>
        <input
          placeholder='Search for a title...'
          value='batman'
          onChange={() => {}}
        >
        </input>

        <button
          onClick={() => {}}
        >
          Search
        </button>
      </div>

      {
        movies?.length > 0 
          ? (
            <div>
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No movies found</h2>
            </div>
          )}
    </div>
  )
}

export default SearchMovies
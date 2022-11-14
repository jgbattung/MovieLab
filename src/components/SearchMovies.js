import React from 'react'
import { useEffect } from 'react'

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const SearchMovies = () => {
  
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    console.log(data)
  }
  
  useEffect(() => {
    searchMovies('batman')
  }, [])
  

  return (
    <div>SearchMovies</div>
  )
}

export default SearchMovies
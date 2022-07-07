import React, { useEffect, useState } from 'react'
import axios from '../../API/axios'
import '../../Components/Row/Row.css'

const base_url = 'https://image.tmdb.org/t/p/origiwnal/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])

  //snippet of code which runs based on specific conditions
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="container_row">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="movie.name"
          ></img>
        ))}
      </div>
    </div>
  )
}

export default Row

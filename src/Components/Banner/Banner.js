import React, { useEffect, useState } from 'react'
import axios from '../../API/axios'
import requests from '../../API/request'
import '../Banner/Banner.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="banner"
      key={movie.id}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_descriptions">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  )
}

export default Banner

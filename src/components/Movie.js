import React, { useState } from 'react';
import Spinner from './Spinner.gif';

const IMG_API = "https://image.tmdb.org/t/p/w1280";



function Movie({ title, poster_path, overview, vote_average }) {
  const [imageLoading, setImageLoading] = useState(true)
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <div className="movie">
      {
        imageLoading ?
          <img src={Spinner} alt="loading" />
          : null
      }
      <img src={IMG_API + poster_path} alt={title} onLoad={() => setImageLoading(false)} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>

      <div className="movie-overview">
        <h2>Overview : </h2>
        <p>{overview}</p>
      </div>

    </div>
  );
}

export default Movie;
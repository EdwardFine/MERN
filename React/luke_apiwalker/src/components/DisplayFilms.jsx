import React from 'react'

const DisplayFilms = (props) => {
    const {film}=props;
  return (
    <div>
        <h1>{film.title}</h1>
        <p><strong>Director: </strong>{film.director}</p>
        <p><strong>Producer: </strong>{film.producer}</p>
        <p><strong>Release Date: </strong>{film.release_date}</p>
        <p>Opening Crawl:</p> <br />
        <p>{film.opening_crawl}</p>
    </div>
  )
}

export default DisplayFilms
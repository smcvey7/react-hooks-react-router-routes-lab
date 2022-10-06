import React from "react";
import { movies } from "../data";

function Movies() {
  const movieEntries = movies.map(movie=>{
    const genres = movie.genres.map(genre=>{
      return <li key={genre}>{genre}</li>
    })
    return( <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <small>Time: {movie.time} </small>
      <p>Genres:</p>
      <ul>
        {genres}
      </ul>
    </div>)
  })
  return <div>
    <h1>Movies Page</h1>
    {movieEntries}
    </div>;
}

export default Movies;

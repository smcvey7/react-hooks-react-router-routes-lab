import React from "react";
import { directors } from "../data";

function Directors() {
  const directorEntries = directors.map(director=>{
    const films = director.movies.map(movie=>{
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={director.name}>
        <h2>{director.name}</h2>
        <p>Movies:</p>
        <ul>
          {films}
        </ul>
      </div>)
  })
  return <div>
    <h1>Directors Page</h1>
    {directorEntries}
    </div>;
}

export default Directors;

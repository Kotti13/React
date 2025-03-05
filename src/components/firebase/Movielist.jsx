// MoviesList.js
import React, { useEffect, useState } from "react";
import { database, ref, get } from "../firebase";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesRef = ref(database, "movies");
      const snapshot = await get(moviesRef);
      if (snapshot.exists()) {
        setMovies(snapshot.val());
      } else {
        console.log("No data available");
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title} width="150" />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;

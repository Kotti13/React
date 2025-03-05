// Movies.js
import React, { useEffect, useState } from "react";
import { database, ref, get } from "./firebase";

const Movies = () => {
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
      <h1>Movies</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "15px", textAlign: "center" }}>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} width="150" />
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

import React, { useState } from "react";
import { tempMovieData } from "../tempData";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;

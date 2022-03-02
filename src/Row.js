import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = `https://image.tmdb.org/t/p/original/`;
export default function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //[] is used to run the row only once
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

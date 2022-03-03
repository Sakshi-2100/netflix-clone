import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";

export default function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movie);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner_description">
          {truncateString(movie?.overview, 150)}
        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

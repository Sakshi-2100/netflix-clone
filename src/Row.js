import React, {useState, useEffect} from 'react';
import axios from "./axios";

export default function Row(props) {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    //[] is used to run the row only once
    async function fetchData(){
        const request = await axios.get(props.fetchUrl);
        console.log(request);
        return request;
    }
    fetchData();
  },[])
  return <div>
      <h2>{props.title}</h2>
  </div>;
}

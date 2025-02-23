import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieList() {
  const [movie, setMovie] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movieinfo/")
      .then((response) => {
        setMovie(response.data.Movies);
      })
      .catch((error) => {
        console.log("Error fetching", error);
        setMessage("❌Error Fetching.");
      });
  }, []);
  return (
    <>
      <div className=" h-screen lg:ml-80 lg:mt-4">
        {movie &&
          movie.map((res) => (
            <div>
              <img
                alt=""
                src={res.Image}
                className="h-52 w-52 rounded-bl-3xl rounded-tr-3xl sm:h-64 lg:h-72"
              />

              <div className="mt-4 sm:flex sm:gap-4">
                <strong className="font-medium">{res.Movie_Name}</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieList;

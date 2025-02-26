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

  const deleteMovie = async (movieId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete-movie/${movieId}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      const result = await response.json();
      console.log(result);
  
      if (response.ok) {
        // ✅ Corrected: Update `movie` state instead of `movieInfo`
        setMovie((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
      } else {
        console.error("Error deleting movie:", result.error);
      }
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };

  return (
    <>
      <div className=" grid grid-cols-4 gap-6 h-screen">
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
                <button className="rounded-sm bg-red-500 text-white p-3" onClick={() => deleteMovie(res.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieList;

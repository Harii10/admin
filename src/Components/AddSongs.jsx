import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ArtistsDetails from "./ArtistsForm";

function AddSongs() {
  const [Title, setTitle] = useState("");
  const [Artists, setArtists] = useState([]);
  const [selectedArtists, setSelectedArtist] = useState('')
  const [Movie, setMovie] = useState([]);
  const [selctedMovie, setSelectedMovie] = useState('')
  const [Track, setTrack] = useState(null);
  const [Picture, setPicture] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const selectArtist = () => {
    axios
      .get("https://hariichandru.pythonanywhere.com/artistsinfos/")
      .then((response) => {
        setArtists(
          Array.isArray(response.data.artists) ? response.data.artists : []
        );
      })
      .catch((error) => {
        console.log("Error fetching", error);
      });
  };

  
  const selectmovie = () =>{
    axios.get('https://hariichandru.pythonanywhere.com/movieinfo/')
    .then((response)=>{
      setMovie(Array.isArray(response.data.Movies) ? response.data.Movies : [])
    })
    .catch((error) => {
      console.log("Error fetching", error);
    });
  }
  
  const handleMovieSelect = (event) => { 
    setSelectedMovie(event.target.value) 
  };

  const handleArtistSelect = (event) =>{
    setSelectedArtist(event.target.value);
  }
  useEffect(() => {
    selectArtist();
    selectmovie()
  }, []);

  const handleTrackChange = (e) => {
    setTrack(e.target.files[0]); // Store the selected MP3 file
  };

  const handleImageChange = (e) => {
    setPicture(e.target.files[0]); // Store the selected image file
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("songname", Title);
    formData.append("artistname", selectedArtists);
    formData.append("moviename", selctedMovie);
    formData.append("trackfile", Track);
    formData.append("picturefile", Picture);
    console.log("Sending FormData");

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "https://hariichandru.pythonanywhere.com/submit/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("✅ Upload Successful:", response.data);
      setMessage("Uploaded Succesfully!");
      setTitle("");
      setMovie("");
      setArtists("");
      setTrack(null);
      setPicture(null);
    } catch (error) {
      console.log(
        "❌Error Uploading: ",
        error.response ? error.response.data : error.message
      );
      setMessage("Uploading Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="bg-white rounded-lg shadow drop-shadow-2xl relative m-4">
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold">Add Songs</h3>
          </div>

          <div className="p-6 space-y-6">
            {loading ? (
              <CircularProgress disableShrink />
            ) : message ? (
              message.includes("Uploading Failed!") ? (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="error">Error Uploading.</Alert>
                </Stack>
              ) : (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">Uploaded Succesfully.</Alert>
                </Stack>
              )
            ) : null}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Song
                  </label>
                  <input
                    type="text"
                    name="songname"
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter a Song Name"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Movie
                  </label>
                  <select
                    name="moviename"
                    onChange={handleMovieSelect}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  >
                    <option value="">Please select</option>
                    {Movie && Movie.length > 0 ? (
                      Movie.map((res) => (
                        <option key={res.id} value={res.Movie_Name}>
                          {res.Movie_Name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading...</option>
                    )}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Artists
                  </label>
                  <select
                    name="artistname"
                    onChange={handleArtistSelect}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  >
                    <option value="">Please select</option>
                    {Artists && Artists.length > 0 ? (
                      Artists.map((res) => (
                        <option key={res.id} value={res.Name}>
                          {res.Name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading...</option>
                    )}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Song File
                  </label>
                  <input
                    type="file"
                    name="trackfile"
                    onChange={handleTrackChange}
                    accept="songs/"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Photo File
                  </label>
                  <input
                    type="file"
                    name="picturefile"
                    onChange={handleImageChange}
                    accept="images/"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Description
                  </label>
                  <textarea
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSongs;

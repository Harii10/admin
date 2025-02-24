import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function AlbumDetails() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("");
    const [albName, setAlbName] = useState('')
    const [movie, setMovie] = useState([])
    const [image, setImage] = useState([])
    const [artist, setArtist] = useState([])
    const [selectedArtist, setSelectedArtist] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')
    const [track, setTrack] = useState(null) 


    const selectmovie = () =>{
      axios.get('http://127.0.0.1:8000/movieinfo/')
      .then((response)=>{
        setMovie(Array.isArray(response.data.Movies) ? response.data.Movies : [])
      })
      .catch((error) => {
        console.log("Error fetching", error);
      });
    }

    const selectArtist = () => {
      axios
        .get("http://127.0.0.1:8000/artistsinfos/")
        .then((response) => {
          setArtist(
            Array.isArray(response.data.artists) ? response.data.artists : []
          );
        })
        .catch((error) => {
          console.log("Error fetching", error);
        });
    };
    const handleSelectChange = (event) => {
      setSelectedArtist(event.target.value); 
      setSelectedMovie(e.target.value)// Only update selectedArtist, NOT Artists
    };
    useEffect(() => {
      selectArtist();
      selectmovie()
    }, []);

const handleSubmit = async(event) =>{
    event.preventDefault()
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("albumname", albName);
    formData.append("artistname", artist);
    formData.append("moviename", movie);
    formData.append("trackfile", track);
    formData.append("picturefile", image);
    console.log("Sending FormData");

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("✅ Upload Successful:", response.data);
      setMessage("Uploaded Succesfully!");
      setAlbName("");
      setMovie("");
      setSelectedArtist("");
      setTrack(null);
      setImage(null);
    } catch (error) {
      console.log(
        "❌Error Uploading: ",
        error.response ? error.response.data : error.message
      );
      setMessage("Uploading Failed!");
    } finally {
      setLoading(false);
    }
}
  return (
    <>
        <div className=" h-screen lg:ml-80 lg:mt-4">
        <div className="bg-white rounded-lg shadow drop-shadow-2xl relative m-4">
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold">Album Detials</h3>
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
                    Name
                  </label>
                  <input
                    type="text"
                    name='albumname'
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
                    name="amoviename"
                    onChange={(e) => setMovie(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  >
                    <option value="">Please select</option>
                    {movie && movie.length > 0 ? (
                      movie.map((res) => (
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
                    name="albartistname"
                    onChange={handleSelectChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  >
                    <option value="">Please select</option>
                    {artist.length > 0 ? (
                      artist.map((res) => (
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
                    Photo File
                  </label>
                  <input
                    type="file"
                    name='albpicfile'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Song File
                  </label>
                  <input
                    type="file"
                    name='albtrackfile'
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    </>
  )
}

export default AlbumDetails
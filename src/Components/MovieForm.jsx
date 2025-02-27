import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function MovieForm() {
  const [mtitle, setMtitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData()
    formData.append('Moviename', mtitle)    
    formData.append('Mimagefile', image)

    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
  
      try {
        const response = await axios.post(
          "https://hariichandru.pythonanywhere.com/m-submit/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("✅ Upload Successful:", response.data);
        setMessage("Saved!");
        setMtitle("");
        setImage(null)
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
      <div className=" h-screen">
        <div className="bg-white rounded-lg shadow drop-shadow-2xl relative m-4">
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold">Add Movies</h3>
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
                    Movie
                  </label>
                  <input
                    type="text"
                    name="Moviename"
                    onChange={(e) => setMtitle(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter a Movie Name"
                    required
                  />
                </div>
                
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Photo File
                  </label>
                  <input
                    type="file"
                    name="Mimagefile"
                    onChange={handleImageChange}
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
  );
}

export default MovieForm;

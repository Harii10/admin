import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ArtistsList() {
  const [isOpen, setIsOpen] = useState(false);
  const [artistsInfo, setArtistsInfo] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    Name: "",
    Genres: "",
    Id_number: "",
  });

  // Open Popup and Set Data
  const openPopup = (artist) => {
    setSelectedArtist(artist);
    setUpdatedData({
      Name: artist.Name || "",
      Genres: artist.Genres || "",
      Id_number: artist.Id_number || "",
    });
    setIsOpen(true);
  };

  // Close Popup
  const closePopup = () => {
    setIsOpen(false);
    setSelectedArtist(null);
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  // Update Artist
  const updateArtist = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/update-artists/${selectedArtist.id}/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const result = await response.json();
      console.log(result);
      setArtistsInfo((prev) =>
        prev.map((artist) =>
          artist.id === selectedArtist.id ? { ...artist, ...updatedData } : artist
        )
      );
      closePopup();
    } catch (error) {
      console.error("Error updating artist:", error);
    }
  };

  const deleteArtist = async (artistId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete-artist/${artistId}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      const result = await response.json();
      console.log(result);
  
      if (response.ok) {
        // Remove the deleted artist from the state
        setArtistsInfo(artistsInfo.filter((artist) => artist.id !== artistId));
      } else {
        console.error("Error deleting artist:", result.error);
      }
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };
  

  // Fetch Artists
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/artistsinfos/")
      .then((response) => {
        setArtistsInfo(response.data.artists);
      })
      .catch((error) => {
        console.log("Error fetching", error);
      });
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900"></th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Name
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Genre
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  ID
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>

              {artistsInfo && artistsInfo.map((artist) => (
                <tr class="overflow-y-scroll">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img
                      src={artist.Image}
                      className="size-20 rounded-lg object-cover"
                      alt="image"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    {artist.Name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {artist.Genre}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {artist.ID_number}
                  </td>
                  <td className="flex gap-7 px-4 py-2 whitespace-nowrap text-gray-700">
                  <button className="bg-green-500 text-white p-3 rounded" onClick={() => openPopup(artist)}>
                      Edit
                    </button>
                    <button className="rounded-sm bg-red-500 text-white p-3" onClick={() => deleteArtist(artist.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Edit Artist</h2>

              {/* Form Inputs */}
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  name="Name"
                  value={updatedData.Name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </label>

              <label className="block mb-2">
                Genre:
                <input
                  type="text"
                  name="Genres"
                  value={updatedData.Genres}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </label>

              <label className="block mb-2">
                ID:
                <input
                  type="number"
                  name="Id_number"
                  value={updatedData.Id_number}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </label>

              {/* Buttons */}
              <div className="flex justify-end mt-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={closePopup}>
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={updateArtist}>
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ArtistsList;

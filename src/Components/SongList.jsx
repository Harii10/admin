import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DataList() {
  const [songInfo, setSongInfo] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://hariichandru.pythonanywhere.com/songinfos/")
      .then((response) => {
        setSongInfo(response.data.songs);
      })
      .catch((error) => {
        console.log("Error fetching", error);
        setMessage("❌Error Fetching.");
      });
  }, []);

  const deleteSong = async (songId) => {
    try {
      const response = await fetch(`https://hariichandru.pythonanywhere.com/delete-song/${songId}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
   
  
      const result = await response.json();
      console.log(result);
  
      if (response.ok) {
        // Remove the deleted artist from the state
        setSongInfo(songInfo.filter((song) => song.id !== songId));
      } else {
        console.error("Error deleting artist:", result.error);
      }
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900"></th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Title
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Artists
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Movie
                </th>
                <th className="px-4 py-2 font-extrabold whitespace-nowrap text-gray-900">
                  Track
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {songInfo && songInfo.map((infos) => (
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img
                      src={infos.Picture}
                      className="size-24 rounded-lg object-cover"
                      alt="image"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    {infos.Title}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {infos.Artists}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {infos.Movie}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    Audios
                  </td>
                  <td className="flex gap-7 px-4 py-2 whitespace-nowrap text-gray-700">
                  <button className="rounded-sm bg-red-500 text-white p-3" onClick={() => deleteSong(infos.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataList;

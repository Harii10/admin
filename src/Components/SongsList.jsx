import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";

function SongsList() {
  const [songInfo, setSongInfo] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/songinfos/")
      .then((response) => {
        setSongInfo(response.data.songs);
      })
      .catch((error) => {
        console.log("Error fetching", error);
        setMessage("❌Error Fetching.");
      });
  }, []);
  return (
    <>
      <div className="flex h-screen bg-gray-100 lg:ml-80 lg:mt-4">
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
                      className="size-20 rounded-lg object-cover"
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
                    {infos.Track}
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

export default SongsList;

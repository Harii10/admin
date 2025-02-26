import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { RiMovie2AiFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";

function Dashboard() {
  const [songCount, setSongCount] = useState(0)
  const [artistCount, setArtistCount] = useState(0)
  const [movieCount, setMovieCount]  = useState(0)


  const totalSongs = () =>{
    axios.get('http://127.0.0.1:8000/songinfos/')
    .then((response) => {
      setSongCount(response.data.total_songs)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }

  const totalArtists = () =>{
    axios.get('http://127.0.0.1:8000/artistsinfos/')
    .then((response) => {
      setArtistCount(response.data.total_artists)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }

  const totalMovies = () =>{
    axios.get('http://127.0.0.1:8000/movieinfo/')
    .then((response) => {
      setMovieCount(response.data.total_Movies)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }

  useEffect(()=>{
    totalSongs()
    totalArtists()
    totalMovies()
  }, [])
  return (
    <>
      <div className="flex h-screen bg-gray-100 lg:ml-80 lg:mt-4">
        <main>
          <div className="lg:flex gap-16 xl:flex 2xl:flex bg-main-10 ">
            <div className="lg:flex xl:flex 2xl:flex gap-28 ml-6">
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <div className="flex flex-col gap-2">
                <h1 className="text-2xl"><SiYoutubemusic/></h1>
                <h1>Songs</h1>
                </div>
                <span className="text-3xl bg-green-400 text-white p-3 rounded-full">{songCount}</span>
              </div>
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <div className="flex flex-col gap-2">
                <h1 className="text-2xl"><FaMusic/></h1>
                <h1>Artists</h1>
                </div>
                <span className="text-3xl bg-green-400 text-white p-3 rounded-full">{artistCount}</span>
              </div>
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <div className="flex flex-col gap-2">
                <h1 className="text-2xl"><RiMovie2AiFill/></h1>
                <h1>Movies</h1>
                </div>
                <span className="text-3xl bg-green-400 text-white p-3 rounded-full">{movieCount}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;

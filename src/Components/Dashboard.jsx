import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";

function Dashboard() {
  const [songCount, setSongCount] = useState(0)

  useEffect(()=>{
    const count = []
    axios.get('http://127.0.0.1:8000/songinfos/')
    .then((response) => {
      setSongCount(response.data.total_songs)
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }, [])
  return (
    <>
      <div className="flex h-screen bg-gray-100 lg:ml-80 lg:mt-4">
        <main>
          <div className="hidden lg:flex gap-16 xl:flex 2xl:flex bg-main-10 ">
            <div className="flex gap-28 ml-6">
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <div className="flex flex-col gap-2">
                <h1 className="text-2xl"><FaMusic/></h1>
                <h1>Songs</h1>
                </div>
                <span className="text-3xl bg-green-400 text-white p-3 rounded-full">{songCount}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;

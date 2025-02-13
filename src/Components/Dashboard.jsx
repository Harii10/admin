import React from "react";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-100 lg:ml-80 lg:mt-4">
        <main>
          <div className="hidden lg:flex gap-16 xl:flex 2xl:flex bg-main-10 ">
            <div className="flex gap-28 ml-6">
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <h1 className="text-2xl"></h1>
                <span className="text-3xl bg-green-400 rounded-full text-white p-3"></span>
              </div>
            </div>
            <div className="flex gap-28 ml-6">
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <h1 className="text-2xl"></h1>
                <span className="text-3xl bg-green-400 rounded-full text-white p-3"></span>
              </div>
            </div>
            <div className="flex gap-28 ml-6">
              <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
                <h1 className="text-2xl"></h1>
                <span className="text-3xl bg-green-400 rounded-full text-white p-3"></span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className=" mt-3 h-0 md:hidden lg:hidden">
          <nav className="">
            <ul
              className="flex justify-between inset-x-0 fixed bottom-0 w-full text-white h-11 bg-black
            "
            >
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-pink-500" : "text-gray-500"}`
                }
              >
                <li className=" ml-12 mt-3 h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10h4V3H3v7Zm7 11h4V10h-4v11ZM3 21h4v-7H3v7Zm14-18v4h4V3h-4Zm0 9h4v-4h-4v4Zm0 9h4v-7h-4v7Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </NavLink>

              <NavLink
                to="/admin/customize"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-pink-500" : "text-gray-500"}`
                }
              >
                <li className="mt-3 h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4.5v15m-7.5-7.5h15"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </NavLink>

              <NavLink
                to="/admin/datas"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-pink-500" : "text-gray-500"}`
                }
              >
                <li className=" mr-12 mt-3 h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 19V5l12-2v14m-12 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm12-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>

        <div>
          <div className="hidden md:block lg:block fixed top-0 h-screen">
            <nav className="border w-72 p-2 rounded-lg m-3 md:w-52 lg:w-72 bg-gray-800 h-screen">
              <ul className="md:flex flex-col gap-8 text-white mt-10">
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `${isActive ? "text-pink-500" : "text-gray-500"}`
                  }
                >
                  <li className="flex p-2 cursor-pointer hover:bg-gray-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-4 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h4V3H3v7Zm7 11h4V10h-4v11ZM3 21h4v-7H3v7Zm14-18v4h4V3h-4Zm0 9h4v-4h-4v4Zm0 9h4v-7h-4v7Z"
                      />
                    </svg>
                    <span>Dashboard</span>
                  </li>
                </NavLink>

                <NavLink
                  to="/admin/datas"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? "text-pink-500" : "text-gray-500"
                    }`
                  }
                >
                  <li className="flex p-2 cursor-pointer hover:bg-gray-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-4"
                    >
                      <ellipse cx="12" cy="5" rx="7" ry="3"></ellipse>
                      <path d="M5 5v6a7 3 0 0 0 14 0V5"></path>
                      <path d="M5 11v6a7 3 0 0 0 14 0v-6"></path>
                      <path d="M16 16l2 2 4-4"></path>
                    </svg>

                    <span>Datas</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/admin/customize"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? "text-pink-500" : "text-gray-500"
                    }`
                  }
                >
                  <li className="flex p-2 cursor-pointer hover:bg-gray-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m-7.5-7.5h15"
                      />
                    </svg>
                    <span>Add</span>
                  </li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

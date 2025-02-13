import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function L_form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  // Hardcoded credentials
  const validUsername = "hari_7";
  const validPassword = "admin";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    {
      formData.username === validUsername && formData.password === validPassword
        ? setLoggedIn(true)
        : alert("❌ Invalid Credentials! Try again.");
    }
  };
  return (
    <>
      {loggedIn ? (
        <div>
          <Layout />
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Login
            </h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <Link to='/admin/dashboard'>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default L_form;

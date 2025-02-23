import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import L_form from "./Components/L_form.jsx";
import Layout from "./Layout.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Sections from "./Components/Sections.jsx";
import Artists from "./Components/ArtistsForm.jsx";
import DataSection from "./Components/DataSection.jsx";

const router = createBrowserRouter([
  {
    path: '/admin/',
    element: <L_form />,
  },
  {
    path: '/admin/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'datas',
        element: <DataSection />,
      },
      {
        path: 'customize',
        element: <Sections/>
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

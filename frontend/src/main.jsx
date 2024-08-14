import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./style/main.scss";

import Blog from "./pages/Blog";
import PageError from "./pages/PageError";
import Contact from "./components/contact.jsx";
import Error404 from "./components/error404/Error404.jsx";


const route = createBrowserRouter([
  
  {
    path:"*",
    element: < Error404 />
  },
  {
    path:"/",
    element:<App />,
    errorElement:<PageError />,
    children: [
      {
        path:"/contact",
        element: <Contact />
      }
    ]
  },
  {
    path:"/blog",
    element: <Blog />,
  },
  {
    path:"/blog/:id/",
    element: <Blog />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router ={route} />   
  </React.StrictMode>
);

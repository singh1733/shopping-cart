import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/home-page/App.jsx";
import Nav from "./components/nav/NavPage";
import Shop from "./components/shop/ShopPage";
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "home", element: <App /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

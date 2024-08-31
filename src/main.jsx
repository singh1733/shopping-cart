import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/home-page/App.jsx";
import Nav from "./components/nav/Nav.jsx";
import Shop from "./components/shop/Shop.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/home-page/App";
import Nav from "./components/nav/Nav";
import Shop from "./components/shop/Shop";
import Cart from "./components/shopping-cart/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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

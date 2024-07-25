import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/home-page/App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

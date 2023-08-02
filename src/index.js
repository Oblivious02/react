import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/login'
import Home from './pages/home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Not Found.....</h1>
  },

  {
    path: "/login",
    element: <Login/>,
    
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


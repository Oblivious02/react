import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


const router = createBrowserRouter([
  {
    path: "/Dashboard",
    element: <Dashboard/>,
    errorElement: <h1>Not Found.....</h1>
  },

  {
    path: "/Login",
    element: <Login/>,
    
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


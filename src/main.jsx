import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from './Components/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthProvider from './Components/Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>

);


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
import Users from './Pages/Users';
import UpdateUser from './Pages/updateUser';

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
      },
      {
        path:'/users',
        element:<Users/>,
        loader:()=>fetch('http://localhost:4000/users')
      },
      {
        path:'/updateUser/:id',
        element:<UpdateUser/>,
        loader:({params})=>fetch(`http://localhost:4000/users/${params.id}`)
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


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeNormal from './HomeNormal'
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin'
import Owner from './Owner'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <HomeNormal />
  },
  {
    path: '/homeuser',
    element: <HomeUser />
  },
  {
    path: '/homeadmin',
    element: <HomeAdmin />
  },
  {
    path: '/owner',
    element: <Owner />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

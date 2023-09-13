import { useEffect, useState } from 'react'
import axios from "axios";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomeNormal from './HomeNormal'
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin'
import Owner from './Owner'
import Layout from './Layout'
import Login from './login';

const App = () => {

 

  return (
    <>
      <HomeNormal />
    </>
  )
}

export default App

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

const App = () => {
  
  const [member, setMembers] = useState([]);

  const getData = async() => {
    const response = await axios.get(
      'https://jsd5-mock-backend.onrender.com/members'
      );
    setMembers(response.data)
    console.log(response.data)
  }

  console.log(member)
  
  // useEffect(() => {
    
  // } , []);


  

  return (
    <>
      {/* <HomeNormal /> */}
      <HomeUser />
    </>
  )
}

export default App

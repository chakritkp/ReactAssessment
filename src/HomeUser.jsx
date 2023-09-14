import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import Layout from './Layout';


const HomeUser = () => {

  const [member, setMembers] = useState([]);
  
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
      console.log(response.data)
      setMembers(response.data)
    };

    getData();
  }, []);

  return (
    <>

      <Layout>
        <div className='homeuser-container'>
          <div className='homeuser-title'>
              <h1 className='h1-font-size'>Generation Thailand<br/>Home - User Sector</h1>
          </div>
          <div className='homenormal-btn'>

          <Link to='/homeuser'>
            <button className='normal-font-size'>User Home Sector</button>
          </Link>
          
          <Link to='/homeadmin'>
            <button className='normal-font-size'>Admin Home Sector</button>
          </Link>

        </div>

          <div className='homenormal-table'>
            <table>
              <thead>
                <tr>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Positon</td>
                </tr>
              </thead>
              <tbody>

                {member.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default HomeUser
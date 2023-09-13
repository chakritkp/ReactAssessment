import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import HomeNormal from './HomeNormal'

const HomeUser = () => {

  const [member, setMembers] = useState([]);
  
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
      setMembers(response.data)
    };

    getData();
  }, []);

  return (
    <>
      <HomeNormal />
      <div className='homeuser-container'>
        <div className='homenormal-table'>
          <table>
            <thead>
              <tr className='table-head'>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Positon</td>
              </tr>
            </thead>
            <tbody className='table-body'>

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
    </>
  )
}

export default HomeUser
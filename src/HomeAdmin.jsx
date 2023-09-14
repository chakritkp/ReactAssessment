import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import Layout from './Layout';
import { Link } from 'react-router-dom';

const HomeAdmin = () => {

  const [member, setMembers] = useState([]);
  const [reload, setReload] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [position, setPosition] = useState('');
  
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
      setMembers(response.data)
    };

    getData();
  }, [reload]);

    const isAlphaNumeric = (input) => /^[A-Za-z]+$/.test(input);

    const handleNameChange = (ev) => {
      const value = ev.target.value;
      if (isAlphaNumeric(value) || value === '') {
        setName(value);
      }
    };
  
    const handleLastnameChange = (ev) => {
      const value = ev.target.value;
      if (isAlphaNumeric(value) || value === '') {
        setLastname(value);
      }
    };
  
    const handlePositionChange = (ev) => {
      const value = ev.target.value;
      if (isAlphaNumeric(value) || value === '') {
        setPosition(value);
      }
    };

    const creatDataUser = async(name, lastname, position) => {
      const response = await axios.post('https://jsd5-mock-backend.onrender.com/members',
        {
          name: name,
          lastname: lastname,
          position: position
        }
      );

      if (response === 200) {
        setMembers(response.data);
      }
      setReload(!reload);
    }

    const deleteData = async(id) => {
      const deleteResponse = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,
      {
        id:id
      })
      setReload(!reload)
    }

  return (
    <>
      <Layout>

      <div className='homeadmin-container'>
        <div className='homeadmin-title'>
            <h1 className='h1-font-size'>Generation Thailand<br/>Home - Admit Sector</h1>
          </div>
          <div className='homenormal-btn'>
            <Link to='/homeuser'>
              <button className='normal-font-size'>User Home Sector</button>
            </Link>
            
            <Link to='/homeadmin'>
              <button className='normal-font-size'>Admin Home Sector</button>
            </Link>

        </div>

        <div className='homeadmin-input-container'>

          <form>
            <p className='h3-font-size'>Create User Here</p>
            <div className='homeadmin-input'>
              <input 
              id='name'
              onChange={handleNameChange}
              type="text" 
              placeholder='First Name'
              value={name}
              />

              <input 
              id='lastname'
              onChange={handleLastnameChange}
              type="text" 
              placeholder='Last Name'
              value={lastname}
              />

              <input 
              id='positon'
              onChange={handlePositionChange}
              type="text" 
              placeholder='Position'
              value={position}
              />

              <button onClick={() => creatDataUser(name, lastname, position)}>Save</button>
            </div>
          </form>
          
        </div>

        <div className='homeadmin-table'>
          <table>
            <thead>
              <tr className='table-head'>
                <td>Name</td>
                <td>Last Name</td>
                <td>Positon</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className='table-body'>
              {member.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                  <td>
                    <button className='delete-btn' onClick={() => deleteData(item.id)}>Delete</button>
                  </td>
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

export default HomeAdmin
import React from 'react'
import HomeNormal from './HomeNormal'

const HomeAdmin = () => {
  return (
    <>
    <HomeNormal />
      <div className='homeadmin-container'>
        <div className='homeadmin-input-container'>
          <p className='h3-font-size'>Create User Here</p>
          <div className='homeadmin-input'>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Position'/>
            <button>Save</button>
          </div>
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
    
  )
}

export default HomeAdmin
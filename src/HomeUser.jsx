import React from 'react'
import HomeNormal from './HomeNormal'

function HomeUser() {
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
              <tr>
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

export default HomeUser
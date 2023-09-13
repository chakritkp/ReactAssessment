import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from './Layout'

function HomeNormal() {
  return (
    <Layout>
      <div className='homenormal-container'>
        <div className='homenormal-title'>
          <h1 className='h1-font-size'>Generation Thailand<br/>React - Assessment</h1>
        </div>
        <div className='homenormal-btn'>
          <Link to='/homeuser'>
            <button className='normal-font-size'>User Home Sector</button>
          </Link>
          
          <Link to='/homeadmin'>
            <button className='normal-font-size'>Admin Home Sector</button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default HomeNormal
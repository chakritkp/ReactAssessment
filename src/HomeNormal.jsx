import React from 'react'
import Layout from './Layout'

function HomeNormal() {
  return (
    <Layout>
      <div className='homenormal-container'>
        <div className='homenormal-title'>
          <h1 className='h1-font-size'>Generation Thailand<br/>React - Assessment</h1>
        </div>
        <div className='homenormal-btn'>
          <button className='normal-font-size'>User Home Sector</button>
          <button className='normal-font-size'>Admin Home Sector</button>
        </div>
      </div>
    </Layout>
  )
}

export default HomeNormal
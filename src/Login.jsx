import React from 'react'


const Login = () => {

    // const adminlogin = [{
    //     username: admin,
    //     password: 12345
    // }]

  return (
        <div className='login-container'>
            <h1 className='h1-font-size'>Login</h1>
            <div className='login'>
                <label htmlFor="username">Username : </label>
                <input type="text" placeholder='Username' />
                <label htmlFor="password">Password : </label>
                <input type="text" placeholder='Password' />
            </div>
            <button>Login</button>
        </div>
  )
}

export default Login
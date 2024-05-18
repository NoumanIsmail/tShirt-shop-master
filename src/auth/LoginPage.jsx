import React from 'react'

function LoginPage() {
  return (
    <>
    <div className="login-image"><img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg" alt="" /></div>
    <div className="login-content">
      <h1>Login</h1>
      <input type="email" placeholder='Your Email'/>
      <input type="password" placeholder='Your Password'/>
      <button type="button" >Login</button>
      <a href="">Not a Customer <b style={{color:'black', fontSize:'1.3em'}}> SignUp </b>First </a>
      
    </div>
    </>
  )
}

export default LoginPage;
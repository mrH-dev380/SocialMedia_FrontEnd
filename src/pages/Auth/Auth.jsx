import React from 'react'
import './Auth.css'
import Logo from '~/img/logo.png'

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>Mr.H Media</h1>
          <h6>Explore the ideas through the world</h6>
        </div>
      </div>
      <LogIn />
      {/* <SignUp /> */}
    </div>
  )
}

function LogIn() {
  return (
    <div className="auth-right">
      <form className="info-form auth-form">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="info-input"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="info-input"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "16px" }}>
              Don't have an account Sign up
            </span>
          <button className="button info-btn">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="auth-right">
      <form className="info-form auth-form">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="info-input"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="info-input"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="info-input"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="password"
            className="info-input"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="info-input"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '16px'}}>Already have an account. Login!</span>
        </div>
        <button className="button info-btn" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth
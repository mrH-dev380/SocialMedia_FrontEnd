import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Auth.css'
import Logo from '~/img/logo.png'
import { logIn, signUp } from '~/actions/AuthActions'

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  }
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)

  const [isSignUp, setIsSignUp] = useState(false)
  const [confirmPass, setConfirmPass] = useState(true)
  const [data, setData] = useState(initialState)

  const handleInputChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }

  }

  const resetForm = () => {
    setData(initialState)
    setConfirmPass(true)
  }

  return (
    <div className="auth">
      {/* Left side */}
      <div className="auth-left">
        <img src={Logo} alt="" />
        <div className="web-name">
          <h1>Mr.H Media</h1>
          <h6>Explore the ideas through the world</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="auth-right">
        <form className="info-form auth-form" onSubmit={handleFormSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && 
            <div>
              <input
                type="text"
                className="info-input"
                name="firstname"
                placeholder="First Name"
                onChange={handleInputChange}
                value={data.firstname}
              />
              <input
                type="text"
                className="info-input"
                name="lastname"
                placeholder="Last Name"
                onChange={handleInputChange}
                value={data.lastname}
              />
            </div>
          }

          <div>
            <input
              type="text"
              className="info-input"
              name="username"
              placeholder="Usernames"
              onChange={handleInputChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="info-input"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={data.password}
            />
            {isSignUp &&
              <input
                type="password"
                className="info-input"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleInputChange}
              />
            }
          </div>
          <span style={{
            display: confirmPass ? 'none' : 'block',
            color: "red",
            fontSize: '14px',
            marginRight: '5px',
            alignSelf: 'flex-end'
          }}>
            * Confirm password is not same
          </span>
          <div>
              <span 
                style={{fontSize: '16px', cursor: 'pointer'}}
                onClick={()=> {
                  setIsSignUp(!isSignUp)
                  resetForm()
                }}
              >
                {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign up"}
              </span>
          </div>
          <button className="button info-btn" type="submit" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
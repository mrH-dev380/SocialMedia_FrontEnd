import React from 'react'
import './LogoSearch.css'
import Logo from '~/img/logo.png'
import { CiSearch } from 'react-icons/ci'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" className='logo-img'/>
      <div className="search">
        <input type="text" placeholder='#Explore' className='search-input'/>
        <div className="search-icon">
          <CiSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
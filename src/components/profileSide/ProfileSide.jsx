import './ProfileSide.css'
import React from 'react'
import LogoSearch from '~/components/LogoSearch'
import ProfileCard from '~/components/ProfileCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard />
    </div>
  )
}

export default ProfileSide;
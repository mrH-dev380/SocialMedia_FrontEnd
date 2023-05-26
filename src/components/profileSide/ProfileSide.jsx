import './ProfileSide.css'
import React from 'react'
import LogoSearch from '~/components/LogoSearch'
import ProfileCard from '~/components/ProfileCard'
import FollowersCard from '~/components/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard location='home'/>
      <FollowersCard />
    </div>
  )
}

export default ProfileSide;
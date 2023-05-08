import './ProfileLeft.css'
import React from 'react'
import Cover from '~/img/cover.jpg'
import Profile from '~/img/profileImg.jpg'
import LogoSearch from '~/components/LogoSearch'
import FollowersCard from '~/components/FollowersCard'
import InfoCard from '~/components/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="profile-left">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft;
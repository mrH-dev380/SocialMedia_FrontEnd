import React from 'react';
import './Profile.css'
import ProfileLeft from '~/components/ProfileLeft';
import ProfileCard from '~/components/ProfileCard';
import PostSide from '~/components/postSide';
import RightSide from '~/components/rightSide';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile;
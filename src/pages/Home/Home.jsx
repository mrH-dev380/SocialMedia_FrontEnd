import './Home.css'
import React from 'react';
import ProfileSide from '~/components/profileSide';
import PostSide from '~/components/postSide';
import RightSide from '~/components/rightSide';

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home;
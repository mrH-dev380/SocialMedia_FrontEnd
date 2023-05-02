import './Home.css'
import React from 'react';
import ProfileSide from '~/components/profileSide';

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <div className="postSide">Post</div>
      <div className="RightSide">Right</div>
    </div>
  )
}

export default Home;
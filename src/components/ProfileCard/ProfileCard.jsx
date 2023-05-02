import './ProfileCard.css'
import React from 'react'
import Cover from '~/img/cover.jpg'
import Profile from '~/img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className="profile-card__img">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="profile-card__name">
        <span>Aunt May</span>
        <span>Unknown UX/UI Design</span>
      </div>
      <div className="follow-status">
        <hr />
        <div className="follow-wrapper">
          <div className="follow">
            <span>12,680</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>27</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>

      <span>
        My profile
      </span>
    </div>
  )
}

export default ProfileCard;
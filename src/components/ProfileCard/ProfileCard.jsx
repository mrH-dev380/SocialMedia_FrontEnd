import './ProfileCard.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileCard = ({location}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const posts = useSelector((state)=>state.postReducer.posts)

  return (
    <div className='profile-card'>
      <div className="profile-card__img">
        <img
          src={
            user.coverPicture
            ? `http://localhost:3000/images/${user.coverPicture}`
            :`http://localhost:3000/images/defaultCover.jpg`
          } 
          alt=""
        />
        <img
          src={
            user.profilePicture
            ? `http://localhost:3000/images/${user.profilePicture}`
            :`http://localhost:3000/images/defaultProfile.png`
          }
          alt="" 
        />
      </div>
      <div className="profile-card__name">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="follow-status">
        <hr />
        <div className="follow-wrapper">
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>

          {location === 'profilePage' && 
          <>
            <div className="vl"></div>
            <div className="follow">
              <span>{posts.filter((post)=>post.userId === user._id).length}</span>
              <span>Posts</span>
            </div>
          </>}
        </div>
        <hr />
      </div>

      {location === 'profilePage'
        ? ""
        : <span>
            <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              My Profile
            </Link>
          </span>
      }
    </div>
  )
}

export default ProfileCard;
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/UserActions';

function Followers({person}) {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    console.log(person._id, user._id)
    following
    ? dispatch(unFollowUser(person._id, {_id :user._id}))
    : dispatch(followUser(person._id, {_id :user._id}))
    setFollowing(!following)
  }
  return (
    <div className="follower">
        <div>
            <img
              src={
                person.profilePicture
                ? `http://localhost:3000/images/${person.profilePicture}`
                : `http://localhost:3000/images/defaultProfile.png`}
              alt=""
              className='follower-image'
            />
            <div className="name">
                <span>{person.firstname}</span>
                <span>@{person.username}</span>
            </div>
        </div>
        <button
          className={following ? 'button unfollow-button follow-button' : 'button follow-button'}
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
    </div>
  )
}

export default Followers
import React from 'react'
import './FollowersCard.css'
import { FollowersData } from '~/Data'

const FollowersCard = () => {
  return (
    <div className="followers-card">
      <h4>Who is following you</h4>

      {FollowersData.map((follower, id)=>{
            return(
                <div className="follower" key={id}>
                    <div>
                        <img src={follower.img} alt="" className='follower-image' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button follow-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'dotenv'
import './Post.css'
import Comment from '~/img/comment.png'
import Share from '~/img/share.png'
import Heart from '~/img/like.png'
import NotLike from '~/img/notlike.png'
import { like, unlike } from '../../actions/PostActions'

const Post = ({data}) => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    console.log(data._id, user._id)
    setLiked(!liked)
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
    liked
    ? dispatch(unlike(data._id, user._id))
    : dispatch(like(data._id, user._id))
  }

  return (
    <div className='post'>
      <img src={data.image ? `http://localhost:3000/images/${data.image}` : ""} alt="" style={{objectFit: "contain"}}></img>
      <div className="post-react">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{color: "var(--gray)", fontSize: "12px"}}>{likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post;
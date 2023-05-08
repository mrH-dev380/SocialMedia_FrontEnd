import React from 'react'
import './PostSide.css'
import PostShare from '~/components/PostShare';
import Posts from '~/components/Posts';

const PostSide = () => {
  return (
    <div className='post-side'>
      <PostShare />
      <Posts />
    </div>
  )
}

export default PostSide;
import './Posts.css'
import React from 'react'
import { PostsData } from '~/Data';
import Post from '~/components/Post';

const Posts = () => {

  return (
    <div className='posts'>
      {PostsData.map((post) => {
        return <Post data={post} key={post.id}/>
      })}
    </div>
  )
}

export default Posts;
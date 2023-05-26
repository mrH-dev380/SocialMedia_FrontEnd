import './Posts.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import Post from '~/components/Post';
import { timelinePost } from '~/actions/PostActions';

const Posts = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { user } = useSelector((state)=>state.authReducer.authData)
  const { posts, loading} = useSelector((state)=>state.postReducer)
  

  user && useEffect(() => {
    dispatch(timelinePost(user._id))
  }, [])
  if(!posts) return 'No Posts'
  if(params._id) return posts.filter((post)=> post.userId===params.id)
  return (
    <div className='posts'>
      { loading
        ? "Fetching posts...."
        : posts.map((post) => {
            return <Post data={post} key={post._id}/>
          })
      }
    </div>
  )
}

export default Posts;
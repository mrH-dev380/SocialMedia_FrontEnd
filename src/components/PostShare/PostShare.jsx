import './PostShare.css'
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProfileImg from '~/img/profileImg.jpg'
import {
  UilScenery,
  UilTimes,
  UilSchedule,
  UilLocationPoint,
  UilPlayCircle
} from "@iconscout/react-unicons";
import { uploadImage, uploadPost } from '../../actions/UploadActions';

const PostShare = () => {
  const [image, setImage] = useState()
  const dispatch = useDispatch()
  const imageRef = useRef()
  const desc = useRef()
  const {user} = useSelector((state)=>state.authReducer.authData)
  const loading = useSelector((state)=>state.postReducer.uploading)

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])

  const handlePreviewPhoto = (e) => {
    const img = e.target.files[0]
    img.preview = URL.createObjectURL(img)

    setImage(img)
  }

  const handleUpLoad = (e) => {
    e.preventdefault

    // Post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    // Post has image
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    reset()
  }

  const reset = () => {
    setImage(null)
    desc.current.value=""
  }

  return (
    <div className='post-share'>
      <img
        src={
          user.profilePicture
          ? `http://localhost:3000/images/${user.coverPicture}`
          :`http://localhost:3000/images/defaultProfile.png`
        }
        alt=""
        className="profile-img"
      />
      <div>
        <input
          ref={desc}
          required
          type="text"
          placeholder="What's happening"
        />
        <div className="post-options">
          <div
            className="option"
            style={{color: "var(--photo)"}}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="option"
            style={{color: "var(--video)"}}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className="option"
            style={{color: "var(--location)"}}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="option"
            style={{color: "var(--schedule)"}}
          >
            <UilSchedule />
            Schedule
          </div>
          <button className='button post-share-btn' onClick={handleUpLoad} disabled={loading}>
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={handlePreviewPhoto}
            />
          </div>
        </div>
        {image && (
          <div className="preview-photo">
            <UilTimes onClick={()=>setImage()}/>
            <img src={image.preview} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare;
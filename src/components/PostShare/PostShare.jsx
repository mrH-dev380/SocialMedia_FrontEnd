import './PostShare.css'
import React, { useState, useRef, useEffect } from 'react'
import ProfileImg from '~/img/profileImg.jpg'
import {
  UilScenery,
  UilTimes,
  UilSchedule,
  UilLocationPoint,
  UilPlayCircle
} from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState()
  const imageRef = useRef()

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

  return (
    <div className='post-share'>
      <img src={ProfileImg} alt="" className="profile-img" />
      <div>
        <input type="text" placeholder="What's happening" />
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
          <button className='button post-share-btn'>Share</button>
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
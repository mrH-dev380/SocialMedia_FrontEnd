import './RightSide.css'
import React, { useState } from 'react'
import Home from "~/img/home.png";
import Noti from "~/img/noti.png";
import Comment from "~/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '~/components/TrendCard';
import ShareModal from '~/components/ShareModal'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className='right-side'>
      <div className="navbar">
        <img src={Home} alt="" />
        <img src={Comment} alt="" />
        <img src={Noti} alt="" />
        <UilSetting />
      </div>
      <TrendCard />

      <button className="button share-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide;
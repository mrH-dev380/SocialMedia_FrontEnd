import './RightSide.css'
import React from 'react'
import Home from "~/img/home.png";
import Noti from "~/img/noti.png";
import Comment from "~/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '~/components/TrendCard/';

const RightSide = () => {
  return (
    <div className='right-side'>
      <div className="navbar">
        <img src={Home} alt="" />
        <img src={Comment} alt="" />
        <img src={Noti} alt="" />
        <UilSetting />
      </div>
      <TrendCard />

      <button className="button share-btn">Share</button>
    </div>
  )
}

export default RightSide;